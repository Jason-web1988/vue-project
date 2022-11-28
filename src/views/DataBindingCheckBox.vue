<template>
    <div>
        <label>
            <input type="checkbox" v-model="checked" true-value="yes" false-value="no">{{checked}}
        </label>
    </div>
</template>
<script>
export default {
    //name:'',
    components: {},
    data() {
        return {
            checked: '확인해보세요!'
        };
    },
    beforeCreate() {},
    created() {},
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount(){},
    unmounted() {},
    methods: {}
}
</script>