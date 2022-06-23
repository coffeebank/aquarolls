<template>
  <div class="min-h-screen v-main bg-cover bg-center text-white">
    <div class="flex flex-no-wrap">
      <router-link to="/">
        <div class="p-4">Home</div>
      </router-link>
      <router-link to="/about">
        <div class="p-4">About</div>
      </router-link>
    </div>
    <router-view v-slot="{ Component }">
      <transition name="fade" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
    }
  }
}
</script>

<style lang="scss">

html, body {
  scroll-behavior: smooth;
  @apply bg-gray-700;
}

div.v-main {
  background-image: url('./assets/elijah-ekdahl-8XxF2kYHIgo-unsplash.jpg');
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

</style>
