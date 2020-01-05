var path = require('path');
var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000
var RoutesNames = require('./constants/ServerConstants');
// using webpack-dev-server and middleware in development environment
if (process.env.NODE_ENV !== 'production') {
    var webpackDevMiddleware = require('webpack-dev-middleware');
    var webpackHotMiddleware = require('webpack-hot-middleware');
    var webpack = require('webpack');
    var config = require('./webpack.config');
    var compiler = webpack(config);

    app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
    app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.join(__dirname, RoutesNames.home)));

app.get(RoutesNames.home, function(request, response) {
    response.sendFile(__dirname + RoutesNames.BaseHtml);
});


app.listen(PORT, function(error) {
    if (error) {
        console.error(error);
    } else {
        console.info("==> 🌎  Listening on port %s.Visit http://localhost:%s/ in your browser.",
            PORT, PORT);
    }
});