<script setup>
import { useSandwichStore } from '../stores/sandwich'
const store = useSandwichStore()
</script>

<template>
  <div class="display-box">
    <h3>Items Added</h3>
    <ul>
      <li v-for="(item, index) in store.ingredients" :key="index">
        {{ item }}
      </li>
    </ul>

    <button v-if="store.ingredients.length > 0" @click="store.reset" class="clear-btn">
      Clear Sandwich
    </button>
  </div>
</template>

<
<style scoped>
.display-box {
  margin-top: 10px;
  padding: 5px;
  border-top: 1px dashed #78350f;
  text-align: center;
}

ul {
  list-style: none;
  padding: 0;
  margin: 10px 0;
}

li {
  font-size: 0.9rem;
  font-weight: bold;
  color: #78350f;
  margin-bottom: 2px;
}

h3 {
  font-size: 1rem;
  margin: 5px 0;
}

.clear-btn {
  background-color: #ef4444;
  color: white;
  border: 2px solid #78350f;

  padding: 4px 10px;
  font-size: 11px;

  cursor: pointer;
  box-shadow: 3px 3px 0px #facc15;
  border-radius: 6px;
}
</style>
