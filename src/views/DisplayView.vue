<template>
  <div class="display-view">
    <div class="actions">
      <RouterLink class="edit" :to="`/input/${contactId}`">Edit</RouterLink>
    </div>
    <div class="view">
      <div class="row">
        <label for="" class="label">Given Name</label>
        <div>John</div>
      </div>
      <div class="row">
        <label for="" class="label">Surname</label>
        <div>Smith</div>
      </div>
      <div class="row">
        <label for="" class="label">Home Phone</label>
        <div>651-410-8490</div>
      </div>
      <div class="row">
        <label for="" class="label">Home Phone</label>
        <div>651-410-8490</div>
      </div>
      <div class="row">
        <label for="" class="label">Home Address</label>
        <div>
          <div>38680 Hastings st, Apt 221</div>
          <div>Fremont, CA 94536</div>
        </div>
      </div>
    </div>
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
