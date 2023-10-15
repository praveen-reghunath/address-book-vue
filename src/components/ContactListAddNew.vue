<template>
    <button class="contact-list-new-item">
        <img src="@/assets/add-record.png" alt="Add New contact image" class="icon-add">
        <span>Add new contact</span>
    </button>
</template>

<script setup>
import { defineProps, ref } from "vue";

const props = defineProps({
    active: {
        type: Boolean,
        default: false
    }
})
</script>

<style lang="scss" scoped>
.contact-list-new-item {
    width: 100%;
    height: var(--contact-item-height, 2rem);
    background-color: white;
    border: 0;
    border-bottom: solid .1rem;
    text-align: left;
    padding: 0.5rem;
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon-add {
        margin-right: .3rem;
    }
}
</style>