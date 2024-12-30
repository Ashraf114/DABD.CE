const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://cdn.cyberelite.work/api',
      changeOrigin: true, // Ensures the host header in requests matches the target
    })
  );
};