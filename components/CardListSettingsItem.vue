<script>

export default {
    name: 'CardListSettingsItem',
    model: {
        prop: 'checked',
        event: 'change'
    },
    props: {
        modelValue: { type: Object, required: true, }
    },
    data() {
        return {
            internalValue: this.modelValue
        }
    },
    // methods: {
    //     ...mapMutations({
    //         removeCardHandler: 'cards/remove',
    //         changeCardHandler: 'cards/change',
    //     })
    // },


}
</script>
<template>
    <li>
        <VInputText v-model="internalValue" @input="emit('updatevalue', internalValue)" />
        <VButton :class="['card_button']" @click="removeCardHandler(id)"> Удалить</VButton>
    </li>
</template>