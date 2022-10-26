export default {
  pinnedPackages: [
    { name: '@file-services/memory', reason: 'drops support for node v12' },
    { name: '@file-services/node', reason: 'drops support for node v12' },
    { name: '@file-services/types', reason: 'drops support for node v12' },
    { name: '@file-services/typescript', reason: 'drops support for node v12' },
    { name: '@types/jsdom', reason: 'drops support for node v12' },
    { name: '@wixc3/resolve-directory-context', reason: 'drops support for node v12' },
    { name: 'jsdom', reason: 'drops support for node v12' },
    { name: 'source-map-loader', reason: 'drops support for node v12' },
    { name: 'vscode-languageserver', reason: 'drops support for node v12' },
    { name: 'vscode-css-languageservice', reason: 'drops support for node v12' },
    { name: 'playwright-core', reason: 'drops support for node v12' },
    { name: 'playwright-chromium', reason: 'drops support for node v12' },
    { name: 'validate-npm-package-name', reason: 'drops support for node v12' },
    { name: 'rollup', reason: 'drops support for node v12' },
    { name: 'jest-docblock', reason: 'drops support for node v12' },
    {
      name: 'vscode-uri',
      reason: 'broken URI types - https://github.com/microsoft/vscode/issues/161166',
    },
  ],
};
