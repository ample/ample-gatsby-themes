module.exports = {
  plugins: [
    `gatsby-theme-docz`,
    `gatsby-link`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("sass"),
        sourceMap: true,
        cssLoaderOptions: {
          localIdentName: "[local]-[hash:base64:3]",
          sourceMap: true
        },
        postCssPlugins: [
          require("postcss-normalize"),
          require("postcss-responsive-type"),
          require("postcss-pxtorem")({
            mediaQuery: true,
            propWhiteList: [],
            replace: true,
            rootValue: 16
          }),
          require("postcss-preset-env")({
            features: {
              "custom-properties": {
                preserve: true,
                warnings: true
              }
            },
            stage: 2
          }),
          require("autoprefixer")({
            grid: "autoplace"
          })
        ]
      }
    }
  ]
}
