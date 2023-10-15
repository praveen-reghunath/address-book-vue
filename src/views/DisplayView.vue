<template>
  <div class="display-view">
    <div class="actions">
      <RouterLink class="edit" :to="`/input/${contactId}`">Edit</RouterLink>
    </div>
    <div class="view">
      <DataRow label="Given Name">{{ contact?.firstName }}</DataRow>
      <DataRow label="Surname">{{ contact?.lastName }}</DataRow>
      <div class="phones">
        <DataRow v-for="phone of contact?.phones" :label="phone.phoneType">{{ phone.phoneNumber }}</DataRow>
      </div>
      <div class="address">
        <DataRow v-for="address of contact?.addresses" :label="address.addressType">
          <div>{{ address.street }}</div>
          <div>{{ address.city }}, {{ address.state }} - {{ address.postalCode }}</div>
        </DataRow>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRouter, useRoute, RouterLink, onBeforeRouteUpdate } from "vue-router";
import DataRow from "@/components/DataRow.vue";
import { useContactStore } from "@/stores/contacts";

const route = useRoute();
const store = useContactStore();

const contactId = computed(() => route.params.id);
const contact = computed(() => store.contactDetails);

onBeforeRouteUpdate(async (to, from) => {
  await store.getContactDetails(to.params.id);
  console.log(store.contactDetails);
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
