<template>
    <div v-show="type=='A'">A</div>
    <div v-show="type=='B'">B</div>
    <div v-show="type=='C'">C</div>
</template>
<script>
export default {
    data() {
        return {
            type:'B'
        };
    }
}
</script>