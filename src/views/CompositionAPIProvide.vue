<template>
  <div>
    <CompositionAPIInject />
  </div>
</template>
<script>
import {provide} from 'vue'     //provide 추가
import CompositionAPIInject from './CompositionAPIInject.vue';
export default {
    components : {
        CompositionAPIInject
    },
    setup(){
        provide('title', 'Vue.js 프로젝트');
        //provide 함수를 통해서 전달한 키(key), 값(value) 설정
    }
}
</script>

<style>

</style>