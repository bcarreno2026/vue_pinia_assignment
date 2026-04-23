import { defineStore } from 'pinia'

export const useSandwichStore = defineStore('sandwich', {
  state: () => ({
    ingredients: [],
  }),

  getters: {
    count: (state) => state.ingredients.length,
    price: (state) => (state.ingredients.length * 0.75).toFixed(2),
  },
  actions: {
    add(item) {
      this.ingredients.push(item)
    },
    reset() {
      this.ingredients = []
    },
  },
})
