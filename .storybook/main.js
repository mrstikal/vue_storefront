module.exports = {
  "stories": [
    "../packages/sylius/theme/ui/**/*.stories.mdx",
    "../packages/sylius/theme/ui/**/*.stories.@(js|jsx|ts|tsx|vue)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-sass-postcss",
  ],
  "framework": "@storybook/vue"
}