var webpack = require('webpack'),
    config = require('./webpack.config'),
    port = 8080,
    WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  contentBase: './src',
  hot: true,
  historyApiFallback: true,
  proxy: {
    '/api/*': {
      target: 'http://localhost:8000/api/',
      rewrite: function(req) {
        req.url = req.url.replace(/^\/api/, '');
      }
    }
  },
  stats: { colors: true }
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
