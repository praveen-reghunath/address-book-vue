<template>
    <div class="input-view">
        <div class="actions">
            <button class="btn-link delete">Delete</button>
            <button class="btn-link done">Done</button>
        </div>
        <div class=""></div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.input-view {
    width: 100%;

    .actions {
        padding: 1rem;
        display: flex;
        justify-content: space-between;
    }

    .btn-link {
        background-color: white;
        border: 0;
        cursor: pointer;

        &:hover {
            text-decoration: underline;
        }

        &.done {
            color: blue;
        }

        &.delete {
            color: red;
        }
    }
}
</style>