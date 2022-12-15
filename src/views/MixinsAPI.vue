<template>
    <div>
    </div>
</template>
<script>
import ApiMixinAPI from '../api.js'
export default {
    mixins : [ApiMixinAPI], //사용할 믹스인 파일을 배열로 등록
    data(){
        return{
            producList:[] 
        };
    },
    async mounted(){
        this.producList = await this.$callAPI("https://c61e8e33-4c03-466d-8c98-962c2128292c.mock.pstmn.io/list", "get");
        console.log(this.producList);
    }
}
</script>
