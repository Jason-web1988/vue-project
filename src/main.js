import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import mixins from './mixins'
import i18nPlugin from './plugins/i18n'     //i18n 플러그인 추가
import store from './store.js'
const i18nStrings = {
    en:{
        hi : 'Hello'
    },
    ko:{
        hi : '안녕하세요'
    }
}

const app = createApp(App)
app.directive('focus', {
    mounted(el){
        el.focus()
    }
})
app.use(store)
app.use(i18nPlugin, i18nStrings)        //i18n 플러그인에 다국어 번역 데이터를 파라미터로 전달
app.use(router)
app.mixin(mixins);
app.mount('#app')
window.Kakao.init("e72ab2a54458a3c6fafc6ada8f1d3534");       //발급받은 앱 키
