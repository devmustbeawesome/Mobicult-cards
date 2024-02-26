<script>
import { mapMutations } from 'vuex'
export default {
    name: 'CardAddBlock',
    data() {
        return {
            ShowModal: false,
            NewCard: "",
        }
    },
    computed: {
        cardList() {
            return this.$store.state.cards.cards
        },
    },

    methods: {
        addCard() {
            if (this.NewCard.trim() === "")
                return false
            this.addCardHandler(this.NewCard)
            this.NewCard = ""
            this.$refs.newCardForm?.reset()
            this.ShowModal = false
        },
        ...mapMutations({
            addCardHandler: 'cards/add'
        })
    },
}
</script>

<template>
    <div class="settings_card-add-wrapper">
        <VButton @click="ShowModal = true">Добавить карточку</VButton>
        <VModal :active="ShowModal" :able-close="true" @update-active="ShowModal = $event">
            <template #header>
                <h2>Добавление карточки</h2>
            </template>
            <template #content>
                <form ref="newCardForm" action="" @submit.prevent="addCard">
                    <VInput v-model="NewCard" />
                </form>
            </template>
            <template #footer>
                <VButton @click="addCard">Добавить</VButton>
            </template>
        </VModal>
    </div>
</template>
<style>
.settings_card-add-wrapper {
    margin-bottom: 15px;
}
</style>