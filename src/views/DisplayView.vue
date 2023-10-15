<template>
  <div class="display-view">
    <div class="actions">
      <RouterLink class="edit" :to="`/input/${contactId}`">Edit</RouterLink>
    </div>
    <div class="view">
      <DataRow label="Given Name">John</DataRow>
      <DataRow label="Surname">Smith</DataRow>
      <DataRow label="Home Phone">651-410-8490</DataRow>
      <DataRow label="Home Phone">651-410-8490</DataRow>
      <DataRow label="Home Address">
        <div>38680 Hastings st, Apt 221</div>
        <div>Fremont, CA 94536</div>
      </DataRow>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute, RouterLink, onBeforeRouteUpdate } from "vue-router";
import DataRow from "@/components/DataRow.vue";

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

  .row {
    display: flex;
    padding: 0 10%;
    margin-top: 2rem;
  }

  .label {
    width: 40%;
  }
}
</style>
