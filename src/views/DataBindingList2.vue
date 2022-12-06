<template>
        <div>
            <table>
                <thead>
                    <tr>
                        <th>제품명</th>
                        <th>가격</th>
                        <th>카테고리</th>
                        <th>배송료</th>
                    </tr>
                </thead>
                <tbody>
                    <tr :key="i" v-for="(product,i) in productList">
                        <td>{{product.product_name}}></td>
                        <td>{{product.price}}</td>
                        <td>{{product.category}}</td>
                        <td>{{product.delivery_price}}</td>
                    </tr>                    
                </tbody>
            </table>
        </div>
</template>
<script>
export default {
    data() {
        return {
            productList: []
        };
    },
    beforeCreate() {},
    created() {
        this.getList();
    },
    beforeMount() {},
    mounted() {},
    beforeUpdate() {},
    updated() {},
    beforeUnmount(){},
    unmounted() {},
    methods: {
        async getList(){
            this.productList = await this.$api("https://c61e8e33-4c03-466d-8c98-962c2128292c.mock.pstmn.io/list","get")
        }
    }
}
</script>
<style scoped>
    table{
        font-family : arial, sans-serif;
        border-collapse : collapse;
        width : 100%;
    }
    td, th{
        border : 1px solid #dddddd;
        text-align : left;
        padding : 8px;
    }
</style>