
<template>
  <main class="app">
    <ContactList></ContactList>
    <RouterView />
  </main>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ContactList from "@/components/ContactList.vue";

</script>

<style lang="scss" scoped>
main.app {
  display: flex;
  border: solid .1rem;
  min-height: 95vh;
}
</style>
