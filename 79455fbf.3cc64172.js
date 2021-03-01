(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},i),{},{components:n})):a.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},94:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(126)),s={id:"class-selectors",title:"CSS Class Selectors",sidebar_label:"Class Selectors"},c={unversionedId:"references/class-selectors",id:"references/class-selectors",isDocsHomePage:!1,title:"CSS Class Selectors",description:"You use CSS classes to define the local name of internal component parts. For example, you can define a .button in a menu component.",source:"@site/docs/references/class-selectors.md",slug:"/references/class-selectors",permalink:"/stylable.io/docs/references/class-selectors",editUrl:"https://github.com/wixplosives/stylable.io/edit/master/docs/docs/references/class-selectors.md",version:"current",sidebar_label:"Class Selectors",sidebar:"someSidebar",previous:{title:"Root",permalink:"/stylable.io/docs/references/root"},next:{title:"CSS Tag/Component Selector",permalink:"/stylable.io/docs/references/tag-selectors"}},l=[{value:"Class selector export",id:"class-selector-export",children:[{value:"Example",id:"example",children:[]}]},{value:"Usage",id:"usage",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"You use ",Object(o.b)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors"},"CSS classes")," to define the local name of internal component parts. For example, you can define a ",Object(o.b)("inlineCode",{parentName:"p"},".button")," in a menu component."),Object(o.b)("p",null,"In ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", class selectors are scoped to the ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/namespace"},"namespace")," of the stylesheet. "),Object(o.b)("p",null,"You should use camelCase to name class selectors. Avoid using hyphens (-) and capital first letters."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'@namespace "Page";\n.root:hover .thumbnail { background:red; }\n.thumbnail { background:green; }\n.thumbnail:hover { background:blue; }\n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* CSS output */\n.Page__root:hover .Page__thumbnail { background:red; }\n.Page__thumbnail { background:green;}\n.Page__thumbnail:hover { background:blue; }\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-js"},"/* comp.jsx */\nimport React from 'react';\nimport { style, classes } from './comp.st.css';\n\nclass Comp extends React.Component {\n    render () {\n        return (\n            <div className={style(classes.root, {}, this.props)}>\n                <img className={style.thumbnail} />\n            </div>\n        )\n    };\n}\n")),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note:"),Object(o.b)("br",{parentName:"p"}),"\n","In ",Object(o.b)("strong",{parentName:"p"},"Stylable"),", as you can see in these examples, ",Object(o.b)("inlineCode",{parentName:"p"},".root")," as a class name is reserved for the main ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/root"},"root"),".",Object(o.b)("br",{parentName:"p"}),"\n","CSS class can also define ",Object(o.b)("a",{parentName:"p",href:"./pseudo-classes"},"states")," and ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/references/extend-stylesheet"},"extend another component"),".")),Object(o.b)("h2",{id:"class-selector-export"},"Class selector export"),Object(o.b)("p",null,"Any class defined in a ",Object(o.b)("strong",{parentName:"p"},"Stylable")," stylesheet is exported as a named export and can be imported by other stylesheets using the directive ",Object(o.b)("inlineCode",{parentName:"p"},"-st-named"),". These classes are also imported using the ",Object(o.b)("a",{parentName:"p",href:"/stylable.io/docs/getting-started/react-integration"},"react-integration")," and applied to the DOM as needed."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"Note"),":\nClasses imported this way should be scoped to your local stylesheet by adding ",Object(o.b)("inlineCode",{parentName:"p"},".root")," or a local class as a prefix to the selector. Adding the scoping causes the selector to affect only the rendering subtree from this point onwards. If classes are imported without scoping to your local stylesheet, this may cause unexpected effects throughout your project.")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'/* button.st.css */\n@namespace "Button";\n.root { background:green; }\n.icon { border: 2px solid black; } \n.label { font-size: 20px; } \n')),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},"/* form.st.css */\n@namespace \"Form\";\n:import {\n    -st-from: './button.st.css';\n    -st-named: icon, label; \n}\n\n/* @selector .Form__myIcon.Button__icon */\n.myIcon { \n    -st-extends: icon; \n}\n\n/* @selector .Form__root .Button__icon */\n.root .icon {}\n\n/* @selector .Form__label.Button__label */\n.label {\n    -st-extends: label;\n}\n")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-css"},'/* \n    JavaScript runtime exports:\n    {\n        root: "Form__root",\n        myIcon: "Form__myIcon Button__icon",\n        icon: "Button__icon",\n        label: "Form__label Button__label"\n    }\n*/\n')),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/pseudo-elements"},"Style pseudo-elements")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",{parentName:"li",href:"/stylable.io/docs/references/mixins"},"Use CSS mixins"))))}p.isMDXComponent=!0}}]);