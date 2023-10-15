<template>
    <div class="contact-list">
        <ListItem v-for="item of list" :key="item.id" :data="item" @select="onItemSelect">
        </ListItem>
        <AddNewButton @click="onAddNewClick"></AddNewButton>
    </div>
</template>

<script setup>
import { ref } from "vue";
import ListItem from "./ContactListItem.vue";
import AddNewButton from "./ContactListAddNew.vue";
import { useRouter, useRoute } from "vue-router";

const list = ref([
    {
        id: 1,
        firstName: "Jane",
        lastName: "Doe"
    },
    {
        id: 2,
        firstName: "Jane",
        lastName: "Doe"
    }
]);

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