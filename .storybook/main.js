const path = require('path');

module.exports = {
  "stories": [
    "../packages/sylius/theme/ui/**/*.stories.mdx",
    "../packages/sylius/theme/ui/**/*.stories.@(js|jsx|ts|tsx|vue)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    {
      name: 'storybook-addon-sass-postcss',
      options: {
        loadSassAfterPostCSS: true,
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
        rule: {
          test: /\.(scss|sass)$/i,
        },
      },
    },
  ],
  "framework": "@storybook/vue",
}