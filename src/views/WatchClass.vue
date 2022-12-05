<template>
    <h1>Full Name : {{lastName}}</h1>
</template>
<script>
export default {
    data() {
        return {
            firstName: 'HyeonSeok',
            lastName : 'Lee',
            fullName : ''
        };
    },
    watch : {
        firstName(){
            this.fullName = this.firstName+ ' ' + this.lastName;
        },
        lastName(){
            this.fullName = this.firstName+ ' ' + this.lastName;
        }
    }
}
</script>