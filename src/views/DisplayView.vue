<template>
  <div class="display-view">
    <div class="actions">
      <RouterLink class="edit" :to="`/input/${contactId}`">Edit</RouterLink>
    </div>
    <div class=""></div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute, RouterLink, onBeforeRouteUpdate } from "vue-router";

const route = useRoute();
const contactId = computed(() => route.params.id);

onBeforeRouteUpdate(async (to, from) => {
  console.log(to.params.id);
});
</script>

<style lang="scss" scoped>
.display-view {
  display: flex;
  flex-direction: column;
  width: 100%;

  .actions {
    padding: 1rem;
  }

  .edit {
    float: right;
    color: blue;
  }

}
</style>
