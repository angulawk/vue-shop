<template>
  <div id="app">
    <router-view 
      :cart="cart"
      :cartTotalQuantity="cartTotalQuantity"
      :cartTotalAmount="cartTotalAmount"
      :areDropdownItemsVisible="areDropdownItemsVisible"
      :isSliderVisible="isSliderVisible"
      :sliderState="sliderState"
      :maximum="maximum"
      :products="products"
      @addProduct="addItem"
      @removeItem="removeItem"
      @handleSliderVisibility="setSliderVisibility"
      @handleDropdownItemsVisibility="setDropdownItemsVisibility"
    ></router-view>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      maximum: 99,
      products: null,
      cart: [],
      isSliderVisible: false,
      areDropdownItemsVisible: false
    }
  },
  computed: {
    cartTotalAmount: function() {
      if(this.cart.length) {
        return this.cart
          .map(item => item.qty * item.product.price)
          .reduce((prev, curr) => {
            return prev + curr;
          }).toFixed(2);
      } else {
        return 0;
      }
    },
    cartTotalQuantity: function() {
      if(this.cart.length) {
        return this.cart
          .map(item => item.qty)
          .reduce((prev, curr) => {
            return prev + curr;
          });
      } else {
        return 0;
      }
    },

    sliderState: function() {
      return this.isSliderVisible ? "visible-slider" : "hidden-slider";
    }
  },
  methods: {
    addItem: function(product) {
      let whichProduct;
      let existing = this.cart.filter((item, index) => {
        if(item.product.id == Number(product.id)) {
          whichProduct = index;
        } 
        return item.product.id == Number(product.id)
      });

      if(existing.length) {
        this.cart[whichProduct].qty++
      } else {
       this.cart.push({
         product,
         qty: 1
       }) 
      }
    },
    removeItem: function(index) {
      if(this.cart[index].qty > 1) {
        this.cart[index].qty--;
      } else {
        this.cart.splice(this.cart[index], 1)
      }
    },
    setSliderVisibility: function() {
      this.isSliderVisible = !this.isSliderVisible
    },
    setDropdownItemsVisibility: function() {
      this.areDropdownItemsVisible = !this.areDropdownItemsVisible
    }
  },
  mounted: function() {
    fetch("https://hplussport.com/api/products/order/price")
      .then(response => response.json())
      .then(data => {
        this.products = data;
      })
  }
};

</script>

<style>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
  body {
    margin: 0;
  }

  .fade-enter, .fade-leave-to {
    opacity: 0;
  }

  .fade-enter-active, .fade-leave-active {
    transition: all 0.3s ease-in-out;
  }

  #app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }

  nav {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: fixed;
  }

  .total-amount {
    padding: 0 15px;
  }

  .dropdown-container {
    position: absolute;
    top: 40px;
    white-space: nowrap;
  }

  .dropdown-items-container {
    background-color: #FFFFFF;
    border: 1px solid #030303;
    border-radius: 4px;
  }

  .dropdown-item {
    padding: 10px;
  }

  .dropdown-button {
    border: 0;
    background-color: darkgreen;
    color: #FFFFFF;
    display: flex;
    align-items: center;
    padding: 10px;
    border-radius: 3px;
    cursor: pointer;
  }

  .switch-button {
    border: 0;
    background: transparent;
    border: 1px solid green;
    color: green;
    border-radius: 3px;
    margin: 0 10px;
  }

  .cart-counter {
    background-color: green;
    color: #FFFFFF;
    border-radius: 10px;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    line-height: 20px;
  }

  .app-container {
    max-width: 1200px;
    padding-top: 100px;
  }

  .item-image {
    max-width: 300px;
    height: auto;
  }

  .main-container {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    max-width: auto;
    margin: 20px auto;
  }

  .visible-slider {
    display: flex;
    justify-content: center;
  }

  .hidden-slider {
    display: none;
  }

  .spacing-10 {
    margin: 20px;
  }

  @media(min-width: 480px) {
    .main-container {
      max-width: 400px;
    }
  }

  @media(min-width: 900px) {
    .main-container {
      flex-flow: row nowrap;
      max-width: 800px;
    }
  }

  .main-container .add-button {
    border: 0;
    border-radius: 4px;
    background-color: #0097a7;
    color: #FFFFFF;
    cursor: pointer;
    height: 30px;
    min-width: 30px;
  }

  .main-container .product-name {
    color: #0097a7;
  }
</style>
