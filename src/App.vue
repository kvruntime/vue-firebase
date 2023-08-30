<script setup>
import HelloWorld from '@/components/HelloWorld.vue'
import AppLayout from './layouts/AppLayout.vue';
import AppHeader from './components/AppHeader.vue';
</script>

<template>
  <AppLayout>
    <template v-slot:header>
      <AppHeader />
    </template>

    <template v-slot:main>
      <router-view/>
    </template>

    <template v-slot:footer>
      Footer
    </template>
  </AppLayout>
  <!-- <router-view /> -->
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
