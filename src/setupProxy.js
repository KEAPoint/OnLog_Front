const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/auth',
        createProxyMiddleware({
            target: 'http://172.16.213.35:8080',
            changeOrigin: true,
        })
    );
    app.use(
        ['/post', '/posts', '/blog'],
        createProxyMiddleware({
            target: 'http://172.16.213.23:8080',
            changeOrigin: true,
        })
    );
};