var webpack = require('webpack'),
    config = require('./webpack.config'),
    port = 8080,
    WebpackDevServer = require('webpack-dev-server');

new WebpackDevServer(webpack(config), {
  contentBase: './src',
  hot: true,
  historyApiFallback: true,
  quiet: false,
  stats: { colors: true },
  proxy: {
    '/api/*': {
      target: {
        host: 'run.skbx.ru',
        protocol: 'http:',
        path: '/api/',
        port: 80
      },
      rewrite: function(req) {
        req.url = req.url.replace(/^\/api/, '');
      },
      changeOrigin: true,
      secure: false
    }
  }
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:' + port);
});
