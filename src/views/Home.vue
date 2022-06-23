<template>
  <div class="home">
    <div class="p-12 h-[30vh] min-h-[20rem] bg-stage flex flex-wrap items-center select-none">
      <div class="w-full">
        <h1 class="text-5xl font-bold">✨ Aqua Rolls ⚝</h1>
        <p class="text-2xl pt-4 pb-8">Come roll for waifus :)</p>
      </div>
    </div>

    <div class="flex flex-no-wrap gap-4 p-8">
      <div class="inline-block cursor-pointer p-4 bg-gray-600 text-white rounded-md" @click="fetchRandomRolls()">
        Roll for Characters
      </div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-5 p-8 pb-16 gap-4 w-full" v-if="store.aniRandom">
      <div v-for="aCard in store.aniRandom" :key="aCard.id" class="rounded-md overflow-hidden">
        <div class="bg-gray-200 text-gray-700 border-l-4 border-gray-700 px-3 py-2 overflow-hidden shadow-lg">
          <div class="pt-2 pb-4 flex-grow">
            <div class="text-lg pb-1 font-bold">{{ aCard.name.userPreferred }}</div>
            <div class="pb-1">{{ aCard.media.nodes[0].title.romaji }}</div>
            <div>💎&ensp;<a :href="aCard.media.nodes[0].siteUrl" class="text-gray-600" target="_blank" rel="noopener noreferrer">{{ aCard.media.nodes[0].id }}</a></div>
          </div>
          <img :src="aCard.image.large" class="object-cover w-full h-64 rounded" />
          <div class="py-2 flex-grow">
            <div class="text-sm">ID: {{ aCard.id }}</div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      {{ store.aniNotice }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
</script>

<script lang="ts">
const store = useCounterStore();

export default {
  data() {
    return {
    }
  },
  methods: {
    async fetchAniRolls() {
      let randInts = []
      let aniRolls = [];

      for (let h = 0; h < 3; h++) {
        randInts.push(this.randomIntFromInterval(1,1519));
      }

      for (let i in randInts) {
        let query = `
          {
            Page(page:${randInts[i]}, perPage:50) {
              characters(sort:ID) {
                name {
                  full
                  native
                  userPreferred
                }
                image {
                  large
                  medium
                }
                id
                media {
                  nodes {
                    title {
                      romaji
                      english
                      native
                    }
                    id
                    siteUrl
                  }
                }
              }
            }
          }
        `
        let aniRollsRaw = await fetch("https://graphql.anilist.co/", {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
          },
          body: JSON.stringify({
            query: query,
            // variables: variables
          })
        });
        let aniData = await aniRollsRaw.json();
        for (let j in aniData.data.Page.characters) {
          aniRolls.push(aniData.data.Page.characters[j]);
        };
      }
      store.aniRolls = aniRolls;
      return aniRolls;
    },
    async fetchRandomRolls() {
      let aniRolls;
      try {
        aniRolls = await this.fetchAniRolls();
      } catch {
        return store.aniNotice = "Error: Failed to fetch data"
      }
      let aniRandom = [
        aniRolls[6],
        aniRolls[12],
        aniRolls[59],
        aniRolls[72],
        aniRolls[94],
        aniRolls[102],
        aniRolls[118],
        aniRolls[124],
        aniRolls[146],
        aniRolls[149]
      ];
      store.aniRandom = aniRandom;
    },
    randomIntFromInterval(min: number, max: number) {
      // https://stackoverflow.com/a/7228322 CC BY-SA 4.0
      return Math.floor(Math.random() * (max - min + 1) + min)
    }
  },
}
</script>

<style lang="scss">

</style>