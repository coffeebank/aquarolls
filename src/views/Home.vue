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

    <div class="grid grid-cols-2 md:grid-cols-5 p-8 pb-16 gap-4 w-full">
      <div v-for="aCard in store.aniRandom" :key="aCard">
        <div class="bg-gray-200 text-gray-700 rounded-md overflow-hidden shadow-lg">
          <div class="p-4 flex-grow">
            <div class="text-lg font-bold">{{ aCard.name.userPreferred }}</div>
          </div>
          <img :src="aCard.image.large" class="object-cover w-full h-64" />
          <div class="p-4 flex-grow">
            <div class="text-sm">ID: {{ aCard.id }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from '../stores/counter';
const store = useCounterStore();
</script>

<script lang="ts">
export default {
  data() {
    return {
    }
  },
  methods: {
    async fetchAniRolls() {
      let randInts = [591, 951, 1519]
      let aniRolls: any[] = [];

      for (let i in randInts) {
        let query = `
          {
            Page(page:${randInts[i]}, perPage:50) {
              characters(sort:ID) {
                name {
                  first
                  middle
                  last
                  full
                  native
                  userPreferred
                }
                image {
                  large
                  medium
                }
                id
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
      this.store.aniRolls = aniRolls;
      return aniRolls;
    },
    async fetchRandomRolls() {
      let aniRolls = await this.fetchAniRolls();
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
      this.store.aniRandom = aniRandom;
    }
  },
}
</script>

<style lang="scss">

</style>