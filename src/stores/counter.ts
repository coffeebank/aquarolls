import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'counter',
  state: () => ({
    aniNotice: "",
    aniRolls: Array<{
      name: {
        full: String,
        native: String,
        userPreferred: String 
      }, 
      image: { 
        large: String, 
        medium: String 
      }, 
      id: Number,
      media: {
        nodes: [
          Array<{
            title: {
              romaji: String,
              english: String,
              native: String,
            },
            id: Number,
            siteUrl: String,
          }>
        ]
      }
    }>(),
    aniRandom: Array<{
      name: {
        full: String,
        native: String,
        userPreferred: String 
      }, 
      image: { 
        large: String, 
        medium: String 
      }, 
      id: Number,
      media: {
        nodes: [
          Array<{
            title: {
              romaji: String,
              english: String,
              native: String,
            },
            id: Number,
            siteUrl: String,
          }>
        ]
      }
    }>(),
  }),
  getters: {
  },
  actions: {
  }
})
