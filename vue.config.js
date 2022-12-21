//import (/* webpackPrefetch : true */ './views/AboutView.vue');

// const { defineConfig } = require('@vue/cli-service')
// module.exports ={
//   chainWebpack : config =>{
//     config.plugins.delete('prefetch');  //prefetch 삭제
//   }
// }

//defineConfig({
//  transpileDependencies: true
//})


// const target = 'http://127.0.0.1:3000';   //proxy 요청을 보낼 서버주소
// module.exports = {
//   devServer : {
//     port:8081,
//     proxy:{
//       //proxy 요청을 보낼 api 시작 부분
//       '^/api':{
//         target,
//         changeOrigin:true
//       }
//     }
//   }
// }

module.exports = {
  chainWebpack: config => {
    config.plugins.delete('prefetch'); //prefetch 삭제
  },
  devServer: {
    proxy: {
      '/oauth2.0': {
        target: 'https://nid.naver.com'
      }
    }
  }
}