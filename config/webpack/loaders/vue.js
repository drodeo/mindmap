const { dev_server: devServer } = require('@rails/webpacker').config

const isProduction = process.env.NODE_ENV === 'production'
const inDevServer = process.argv.find(v => v.includes('webpack-dev-server'))
const extractCSS = !(inDevServer && (devServer && devServer.hmr)) || isProduction

module.exports = {
  test: /\.vue(\.erb)?$/,
  use: [{
    loader: 'vue-loader',
      options: {
          extractCSS: true,
          loaders: {
              js: 'babel-loader',
              file: 'file-loader',
              scss: 'vue-style-loader!css-loader!postcss-loader!sass-loader',
              sass: 'vue-style-loader!css-loader!postcss-loader!sass-loader?indentedSyntax'
          }
      }
  }]
}
