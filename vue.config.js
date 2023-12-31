const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,

  //代理
  devServer:{
    proxy: {
      '/user': {
        target: 'http://192.168.31.231:8888',
        changeOrigin: true,

      },
      '/console':{
        target: 'http://192.168.31.231:8888',
        changeOrigin: true,
      }
    }
    // proxy: '192.168.31.231:8888'
  }
})
