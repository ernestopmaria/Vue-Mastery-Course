app.component('product-display', {
  props: {
    premium: {
      type: Boolean,
      required:true
    }
  },
    template:
/*html*/
`<div class="product-display">
    <div class="product-container">
      <div class="product-image">
      <img v-bind:src="image" :class="[inStock? '':'out-of-stock-img']">
      </div>
      <div class="product-info">
      <h1>{{ title }}</h1>
        <p>{{ sale }}</p>
        <p v-if="inStock">In Stock</p>
        <p v-else>Out of Stock</p>
        <p>Shipping : {{shipping}}</p>
        <product-details :details="details"></product-details>
        <div v-for="(variant, index) in variants" :key="variant.id"
         v-on:mouseover="updateVariant(index)" 
         class="color-circle"
         :style="{backgroundColor:variant.color}"
         ></div>
        <button class="button" :class="[inStock?'':'disabledButton']" :disabled="!inStock" v-on:click="addToCart">Add to Cart</button>
        <button class="button" v-on:click="resetCart">Clear cart</button>
        </div>
        <review-list v-if="reviews.length" :reviews="reviews" > </review-list>
        <review-form @review-submitted="addReview"></review-form>
    </div>
  </div>`
  ,
  data() {
    return {
        cart:0,
        product: 'Socks',
        brand: 'Nike',
      
        selectedvariant:0,
        details: ['50% cotton', '30% wool', '20% polyester'],
        variants: [
          { id: 2234, color: 'green', image: './assets/images/socks_green.jpg', quantity:50 },
          { id: 2235, color: 'blue', image: './assets/images/socks_blue.jpg' ,quantity:7 },
      ],
        reviews:[]
    }
},
methods: {
    addToCart() {
        this.$emit('add-to-cart', this.variants[this.selectedvariant].id)
  },
  resetCart() {
    this.$emit('remove-from-cart', this.variants[this.selectedvariant].id)
},
    updateVariant(index) {
       this.selectedvariant=index
  },
  addReview(review) {
      this.reviews.push(review)
    }
    
},
computed:{
    title() {
        if (this.onSale) {
            return this.product + ' ' + this.brand
        }
       
    },
    image() {
        return this.variants[this.selectedvariant].image
    },
    inStock() {
        return this.variants[this.selectedvariant].quantity
    },
    sale() {
        if (this.inStock) {
            return this.brand + ' ' + this.product + ' is on sale.'
        }
        return this.brand + ' ' + this.product + ' unavailable'
  },
  shipping() {
    if (this.premium) {
      return 'Free'
      
    }
    return 2.99
    }
    
}
})