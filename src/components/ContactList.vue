<template>
    <div class="contact-list">
        <ListItem v-for="item of contacts" :key="item.id" :data="item" @select="onItemSelect">
        </ListItem>
        <AddNewButton @click="onAddNewClick"></AddNewButton>
    </div>
</template>

<script setup>
import { ref, computed } from "vue";
import ListItem from "./ContactListItem.vue";
import AddNewButton from "./ContactListAddNew.vue";
import { useRouter, useRoute } from "vue-router";
import { useContactStore } from "@/stores/contacts";

const store = useContactStore();

const contacts = computed(() => store.contacts);

const router = useRouter();

function onItemSelect(item) {
    router.push(`/view/${item.id}`);
}

function onAddNewClick() {
    router.push(`/input`);
}
</script>

<style lang="scss" scoped>
.contact-list {
    width: 20%;
    border-right: solid .1rem;
    background-color: gray;
    overflow: hidden;
}
</style>