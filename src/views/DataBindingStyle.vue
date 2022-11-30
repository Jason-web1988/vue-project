<template>
<div v-bind:style="styleObject">인라인 스타일</div>
</template>
<script>

export default{ 
    data(){
        return{
            styleObject : {
                color : 'red',
                fontsize : '13px'
            }
        };
    }
}
</script>