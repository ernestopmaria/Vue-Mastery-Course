const app = Vue.createApp({
    data() {
        return {
            cart:[],
            premium:true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        resetCart(id) {
            this.cart = this.cart.filter(e=>e!==id)
        }
    }
})