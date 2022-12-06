<template>
    <div>
        <!-- PageTitle.vue(import) props의 key 'title'가 부모로부터 받는다. -->
        <!-- <PageTitle title = "부모 컴포넌트에서 자식 컴포넌트로 데이터 전달!!"/> -->
        
        <!-- 동적으로 페티이 타이틀  -->
        <page-title v-bind:title="title" /> 
        <!-- <page-title: title="title" /> 이거는 안됨 P156-->

        <!-- 숫자형으로 전달 -->         
        <!-- <PageTitle :title="title"/> 하다가 중도 포기 P157 -->
        
    </div>
</template>
<script>
import PageTitle from '../components/PageTitle.vue';    //컴포넌트 import

export default {
    components :{PageTitle}, //현재 컴포넌트에서 사용할 컴포넌트 등록
    data(){
        return{
            title : "동적 페이지 타이틀"
        };
    }
}
</script>
