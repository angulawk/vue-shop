<template>
  <transition name="fade">
    <div v-if="isSliderVisible">
      <div class="input-container" :class="sliderState">
        <label for="formMax" class="spacing-10">max</label>
        <input
          type="text"
          v-model="maxAmount"
          id="formMax" 
          class="spacing-10"
          @change="$emit('update:maximum', maxAmount)"
        >
        <input 
          type="range" 
          class="custom-range spacing-10" 
          min="0" 
          max="200" 
          v-model="maxAmount"
          @input="$emit('update:maximum', maxAmount)"
        >
      </div>
    </div> 
  </transition>
</template>

<script>

export default {
  data: function() {
    return {
      maxAmount: 99
    }
  },
  props: {
    isSliderVisible: Boolean,
    sliderState: String
  }
}
</script>
