import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    aniRolls: [],
    aniRandom: [],
  }),
  getters: {
  },
  actions: {
  }
})
