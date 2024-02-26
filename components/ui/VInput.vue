<template>
    <input v-if="type !== 'textarea'" ref="input" :type="newType" :maxlength="maxlength" :value="computedValue"
        class="form_input" :class="classList" @input="onInput" @change="onChange" />
    <textarea v-else ref="textarea" :maxlength="maxlength" :value="computedValue" class="form_input" :class="classList"
        @input="onInput" @change="onChange" />
</template>

<script>
export default {
    name: "VInput",
    props: {
        classList: { type: Array, required: false, default: () => [] },
        value: { type: String, required: true, default: '' },
        type: { type: String, required: false, default: 'text' },
        maxlength: { type: Number, required: false, default: 500 },
    },
    data() {
        return {
            newValue: this.value,
            newType: this.type,
        }
    },
    computed: {
        computedValue: {
            get: function () { return this.newValue },
            set: function (value) {
                this.$emit('input', value)
            }
        }
    },
    watch: {
        value: function (value) {
            this.newValue = value
        },
        type: function (type) {
            this.newType = type
        }
    },
    methods: {
        onInput: function (event) {
            this.updateValue(event.target.value)
        },
        onChange: function (event) {
            this.updateValue(event.target.value)
        },
        updateValue: function (value) {
            this.computedValue = value
            // !this.isValid && this.checkHtml5Validity()
        },
    },


}
</script>
<style lang="scss" scoped>
.form_input {
    width: 100%;
    background: none;
    padding: 10px 15px;
    border: 1px solid black;
    font-size: 18px;
    border-radius: 5px;
}

@media only screen and (max-width: 600px) {
    .form_input {
        font-size: 14px;
        padding: 8px 13px;
        border-radius: 4px;
    }
}
</style>