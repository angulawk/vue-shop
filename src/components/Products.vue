<template>
  <div>
    <h1>My shop</h1>

    <Navigation 
      :areDropdownItemsVisible="areDropdownItemsVisible"
      :cartTotalQuantity="cartTotalQuantity"
      :cartTotalAmount="cartTotalAmount"
      :cart="cart"
    />

    <div class="app-container">
      <PriceSlider
        :isSliderVisible="isSliderVisible"
        :sliderState="sliderState"
        :maximum.sync="maximum"
      />
      <ProductList
        :maximum="maximum"
        :products="products"
      />
    </div>
  </div>
</template>

<script>
import ProductList from "./ProductList.vue";
import PriceSlider from "./PriceSlider.vue";
import Navigation from "./Navigation.vue";

export default {
  components: {
    ProductList,
    PriceSlider,
    Navigation
  },
  props: [
    "areDropdownItemsVisible",
    "cartTotalQuantity", 
    "cartTotalAmount", 
    "cart", 
    "isSliderVisible",
    "sliderState", 
    "maximum", 
    "products"
  ]
}
</script>
