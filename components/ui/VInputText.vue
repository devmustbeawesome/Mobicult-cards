<script lang="ts">
import { ref } from 'vue'

export default {
    name: "VInput"
}
</script>

<script lang="ts" setup>
const emit = defineEmits(["input"])
const props = defineProps({
    label: { type: String, required: false, default: "" },
    placeholder: { type: String, required: false, default: "" },
    value: { type: String, required: false, default: "" }
})
const inputValue = ref(props.value)
</script>
<template>
    <div class="form_input_wrapper">
        <label class="form_input_label">
            {{ props.label }}
            <input v-model="inputValue" type="text" class="form_input" :placeholder="props.placeholder"
                @input="emit('input', inputValue)" />
        </label>
    </div>
</template>
<style>
.form_input {
    background: none;
    padding: 10px 15px;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 5px;
}

.form_input_label {
    display: flex;
    flex-direction: column;
}
</style>