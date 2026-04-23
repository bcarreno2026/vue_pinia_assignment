<script setup>
import { useSandwichStore } from '../stores/sandwich'
const store = useSandwichStore()
</script>
<template>
  <ul>
    <li v-for="(item, index) in store.ingredients" :key="index">{{ item }}</li>
  </ul>
  <button @click="store.reset">Clear Sandwich</button>
</template>
