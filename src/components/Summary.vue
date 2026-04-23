<script setup>
import { useSandwichStore } from '../stores/sandwich'
const store = useSandwichStore()
</script>

<template>
  <div class="cheese-box">
    <p class="label">TOTAL</p>
    <p class="price">${{ store.price }}</p>
  </div>
</template>

<style scoped>
.cheese-box {
  background-color: #facc15;

  border: 4px solid #86efac;

  width: 120px;
  padding: 10px;
  margin: 20px auto;
  border-radius: 8px;
  text-align: center;
  box-shadow: 4px 4px 0px #2e1065;
}

.label {
  font-size: 10px;
  font-weight: bold;
  color: #d43d59;
  margin: 0;
}

.price {
  font-size: 24px;
  font-weight: 900;
  color: #d43d59; /* Purple text for the price */
  margin: 0;
}
</style>
