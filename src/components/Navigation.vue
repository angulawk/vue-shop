<template>
  <nav>
    <button class="switch-button" @click="$parent.$emit('handleSliderVisibility')">
      <font-awesome-icon icon="dollar-sign" />
    </button>
    <button class="dropdown-button" @click="$parent.$emit('handleDropdownItemsVisibility')">
      <span class="cart-counter">{{ cartTotalQuantity }}</span>
      <font-awesome-icon icon="shopping-cart" />
      <span class="total-amount">{{ cartTotalAmount }}</span>
      <font-awesome-icon icon="sort-down" />
    </button>

    <div class="dropdown-container">
      <div class="dropdown-items-container" v-if="areDropdownItemsVisible">
        <div v-for="(item, index) in cart" :key="index" class="dropdown-item">
          <span>{{item.qty}}</span>
          {{item.product.name}}
          <b>{{(item.qty * item.product.price) | currency}}</b>
          <a href="#" @click="$parent.$emit('removeItem', index)">
            <font-awesome-icon icon="trash" />
          </a>
        </div>
        <router-link class="btn btn-sm btn-outline-info text-dark" to="/checkout">Checkout</router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: {
    areDropdownItemsVisible: Boolean,
    cartTotalQuantity: Number | String,
    cartTotalAmount: Number | String,
    cart: Array,
    currency: []
  },
  filters: {
    currency: function(val) {
      return `$ ${Number.parseFloat(val).toFixed(2)}`
    }
  }
}
</script>
