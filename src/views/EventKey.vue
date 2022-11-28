<template>
<div>
    <input type="text" @keyup.enter="submit" v-model="name" />
    <input type="text" @keyup.alt.enter="clear" v-model="name1" />
    <div @click.shift="doSomething">Do_something</div>
</div>
</template>
<script>

export default{ 
    data(){
        return{
            name:'',
            name1:"hihihi"
        };
    },
    methods:{
        submit : function(){
            alert(this.name);
        },
        clear : function(){
            this.name1 = '';
        },
        doSomething : function(){
            alert('GoodNight');
        }
    }
}
</script>