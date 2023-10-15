<template>
    <div class="data-row">
        <label for="" class="label">{{ label }}</label>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    label: {
        type: String,
        default: ""
    }
});
</script>

<style lang="scss" scoped>
.data-row {
    display: flex;
    padding: 0 10%;
    margin-top: 2rem;

    .label {
        width: 40%;
    }
}
</style>