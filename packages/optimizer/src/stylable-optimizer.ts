import {
    IStylableOptimizer,
    parseSelector,
    SelectorAstNode,
    StylableResults,
    traverseNode,
} from '@stylable/core';
import csso from 'csso';
import postcss, { Declaration, Root, Rule, Node, Comment } from 'postcss';
import { StylableClassNameOptimizer } from './classname-optimizer';
import { StylableNamespaceOptimizer } from './namespace-optimizer';

export interface OptimizeConfig {
    removeComments?: boolean;
    removeStylableDirectives?: boolean;
    removeUnusedComponents?: boolean;
    classNameOptimizations?: boolean;
    removeEmptyNodes?: boolean;
}

export class StylableOptimizer implements IStylableOptimizer {
    constructor(
        public classNameOptimizer = new StylableClassNameOptimizer(),
        public namespaceOptimizer = new StylableNamespaceOptimizer()
    ) {}

    public minifyCSS(css: string): string {
        // disabling restructuring as it breaks production mode by disappearing classes
        return csso.minify(css, { restructure: false }).css;
    }
    public optimize(
        config: OptimizeConfig,
        stylableResults: StylableResults,
        usageMapping: Record<string, boolean>,
        delimiter?: string
    ) {
        const { meta, exports: jsExports } = stylableResults;
        const outputAst = meta.outputAst!;

        if (config.removeComments) {
            this.removeComments(outputAst);
        }
        if (config.removeStylableDirectives) {
            this.removeStylableDirectives(outputAst);
        }
        if (config.removeUnusedComponents && usageMapping && delimiter) {
            this.removeUnusedComponents(delimiter, outputAst, usageMapping);
        }
        if (config.removeEmptyNodes) {
            this.removeEmptyNodes(outputAst);
        }
        if (config.classNameOptimizations) {
            this.classNameOptimizer.optimizeAstAndExports(
                outputAst,
                jsExports.classes,
                Object.keys(meta.classes),
                usageMapping || {}, // used to determine namespaces and computed states
                meta.globals
            );
        }
    }
    public removeStylableDirectives(root: Root, shouldComment = false) {
        const toRemove: Node[] = [];
        root.walkDecls((decl: Declaration) => {
            if (decl.prop.startsWith('-st-')) {
                toRemove.push(decl);
            }
        });
        toRemove.forEach(
            shouldComment
                ? (node) => {
                      node.replaceWith(...createLineByLineComment(node));
                  }
                : (node) => {
                      node.remove();
                  }
        );
    }
    private removeEmptyNodes(root: Root) {
        removeEmptyNodes(root);
    }
    private removeComments(root: Root) {
        removeCommentNodes(root);
    }
    private removeUnusedComponents(
        delimiter: string,
        outputAst: Root,
        usageMapping: Record<string, boolean>,
        shouldComment = false
    ) {
        const matchNamespace = new RegExp(`(.+)${delimiter}(.+)`);
        outputAst.walkRules((rule) => {
            const outputSelectors = rule.selectors.filter((selector) => {
                const selectorAst = parseSelector(selector);
                return !this.isContainsUnusedParts(selectorAst, usageMapping, matchNamespace);
            });
            if (outputSelectors.length) {
                rule.selector = outputSelectors.join();
            } else {
                if (shouldComment) {
                    replaceRecursiveUpIfEmpty('NOT_IN_USE', rule);
                } else {
                    rule.remove();
                }
            }
        });
    }
    private isContainsUnusedParts(
        selectorAst: SelectorAstNode,
        usageMapping: Record<string, boolean>,
        matchNamespace: RegExp
    ) {
        // TODO: !!-!-!! last working point
        let isContainsUnusedParts = false;
        traverseNode(selectorAst, (node) => {
            if (isContainsUnusedParts) {
                return false;
            }
            if (node.type === 'class') {
                const parts = matchNamespace.exec(node.name);
                if (parts) {
                    if (usageMapping[parts[1]] === false) {
                        isContainsUnusedParts = true;
                    }
                }
            } else if (node.type === 'nested-pseudo-element') {
                return false;
            }
            return undefined;
        });
        return isContainsUnusedParts;
    }
}

export function removeCommentNodes(root: Root) {
    root.walkComments((comment) => {
        comment.remove();
    });
    root.walkDecls((decl) => {
        const r: any = decl.raws;
        if (r.value) {
            r.value.raw = decl.value;
        }
    });
}

export function removeEmptyNodes(root: Root) {
    const toRemove: Node[] = [];

    root.walkRules((rule: Rule) => {
        const shouldRemove =
            (rule.nodes && rule.nodes.length === 0) ||
            (rule.nodes && rule.nodes.filter((node) => node.type !== 'comment').length === 0);
        if (shouldRemove) {
            toRemove.push(rule);
        }
    });

    toRemove.forEach((node) => {
        removeRecursiveUpIfEmpty(node);
    });
}

export function createCommentFromNode(label: string, node: Node) {
    return [
        postcss.comment({
            text: label + ':',
        }),
        ...createLineByLineComment(node),
    ];
}

export function createLineByLineComment(node: Node) {
    return node
        .toString()
        .split(/\r?\n/)
        .map((x) => {
            if (x.trim() === '') {
                return undefined;
            }
            let c;
            if (x.trim().startsWith('/*') && x.trim().endsWith('*/')) {
                c = postcss.comment({ text: x.replace(/\*\//gm, '').replace(/\/\*/gm, '') });
                // c = comment({ text: x.replace(/\*\//gm, '').replace(/\/\*/gm, '') });
            } else {
                c = postcss.comment({ text: x.replace(/\*\//gm, '*//*') });
            }
            return c;
        })
        .filter(Boolean) as Comment[];
}

export function removeRecursiveUpIfEmpty(node: Node) {
    const parent = node.parent;
    node.remove();
    if (parent && parent.nodes && parent.nodes.length === 0) {
        removeRecursiveUpIfEmpty(parent);
    }
}

export function replaceRecursiveUpIfEmpty(label: string, node: Node) {
    const parent = node.parent;
    node.raws = {};
    node.replaceWith(
        ...(node.type === 'decl'
            ? createLineByLineComment(node)
            : createCommentFromNode(label, node))
    );
    if (
        parent &&
        parent.nodes &&
        parent.nodes.filter((node) => node.type !== 'comment').length === 0
    ) {
        replaceRecursiveUpIfEmpty('EMPTY_NODE', parent);
    }
}
