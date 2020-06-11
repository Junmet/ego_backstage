module.exports = {
  // 配置跨域
  devServer: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:3300",
        changeOrigin: true,
        pathRewrite: {
          "^/api": "",
        },
      },
    },
  },
};
