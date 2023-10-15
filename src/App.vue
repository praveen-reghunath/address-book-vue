
<template>
  <main class="app">
    <ContactList></ContactList>
    <RouterView />
  </main>
</template>

<script setup>
import { onBeforeMount } from "vue";
import { RouterLink, RouterView } from 'vue-router'
import ContactList from "@/components/ContactList.vue";
import { useContactStore } from "@/stores/contacts.js";

const store = useContactStore();

onBeforeMount(() => {
  store.getContacts();
});
</script>

<style lang="scss" scoped>
main.app {
  display: flex;
  border: solid .1rem;
  min-height: 95vh;
}
</style>
