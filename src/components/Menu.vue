<script setup>
import { useSandwichStore } from '../stores/sandwich'
const store = useSandwichStore()
</script>

<template>
  <!-- We added the 'menu-box' class here -->
  <div class="menu-box">
    <h3>Select Ingredients</h3>
    <div class="button-group">
      <button @click="store.add('Bread')">Bread</button>
      <button @click="store.add('Bologna')">Bologna</button>
      <button @click="store.add('Tomato')">Tomato</button>
      <button @click="store.add('Salad')">Salad</button>
      <button @click="store.add('Mustard')">Mustard</button>
      <button @click="store.add('Mayo')">Mayo</button>
    </div>
  </div>
</template>

<style scoped>
.menu-box {
  background-color: #be185d;
  border: 3px solid #2e1065;
  padding: 20px;
  border-radius: 12px;
  color: white;
  margin-bottom: 20px;
}

.button-group {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 10px;
}

button {
  background-color: white;
  color: #be185d;
  border: none;
  padding: 8px 12px;
  border-radius: 6px;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #2e1065;
  color: white;
}
</style>
