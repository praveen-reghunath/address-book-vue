<template>
    <button class="contact-list-item" @click="onButtonClick">
        <span class="name">{{ data.firstName }}</span>
        <span class="name">{{ data.lastName }}</span>
    </button>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
    data: {
        type: Object,
        default: new Object()
    }
});

const emit = defineEmits(["select"]);

function onButtonClick(e) {
    emit("select", props.data);
}
</script>

<style lang="scss" scoped>
.contact-list-item {
    display: flex;
    padding: 0.5rem;
    border: 0;
    border-bottom: solid .1rem;
    width: 100%;
    cursor: pointer;
    background-color: white;
    height: var(--contact-item-height, 2rem);
    align-items: center;

    .name {
        margin-right: .3rem;
    }
}
</style>