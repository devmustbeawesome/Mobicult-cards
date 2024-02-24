<script lang="ts">

export default {
    name: "VButton",
    props: { classList: { type: Array, required: false, default: () => [] } },
}
</script>

<script lang="ts" setup>
const emit = defineEmits(["click"])
</script>
<template>
    <button class="btn" :class="classList" @click="emit('click')">
        <slot />
    </button>
</template>
<style>
.btn {
    background: none;
    padding: 10px 15px;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 5px;
    cursor: pointer;
}

.btn:hover {
    text-decoration: underline;
    transition: 1s;
}
</style>