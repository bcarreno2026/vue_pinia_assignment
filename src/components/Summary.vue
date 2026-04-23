<script setup>
import { useSandwichStore } from '../stores/sandwich'
const store = useSandwichStore()
</script>

<template>
  <div class="cheese-tag">
    <p class="label">Total Price</p>
    <p class="price">${{ store.price }}</p>
  </div>
</template>

<style scoped>
.cheese-tag {
  background-color: #facc15;
  border: 2px solid #78350f;

  width: 100px;
  padding: 8px;
  margin: 15px auto;
  border-radius: 8px;
  text-align: center;

  box-shadow:
    4px 4px 0px #ef4444,
    8px 8px 0px #facc15;
}

.label {
  font-size: 10px;
  font-weight: bold;
  color: #78350f;
  margin: 0;
}

.price {
  font-size: 20px;
  font-weight: 900;
  color: #2e1065;
  margin: 0;
}
</style>
