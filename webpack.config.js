module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              modules: true,
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}