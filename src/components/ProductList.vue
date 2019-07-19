<template>
  <div>
    <div class="main-container"
      v-for="product in products"
      v-if="product.price<=Number(maximum)">
      <button class="add-button" @click="$parent.$emit('addProduct', product)">+</button>
      <img class="item-image" v-bind:src="product.image" v-bind:alt="product.name">
      <div class="description-container">
        <h2 class="product-name">{{ product.name }}</h2>
        <p>{{ product.description }}</p>
        <Price
          :value="Number(product.price)"
          :prefix="'$'"
          :precision="2"
          :conversion=".87"
        />
      </div>
    </div>
  </div>

</template>

<script>
  import Price from "./Price";

  export default {
    props: ["products", "maximum"],
    components: {
      Price
    }
  }
</script>