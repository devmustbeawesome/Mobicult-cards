<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CardList',
    props: {
        // editable: { type: Boolean, required: false, default: false } 
    },
    data() {
        return {
        }
    },
    computed: {
        cardList() {
            return this.$store.state.cards.cards
        },
    },
    methods: {
        ...mapMutations({
            removeCardHandler: 'cards/remove',
        })
    },

}
</script>

<template>
    <transition-group name="list" tag="ul" class="settings_card-List">
        <li v-for="{ id, text } in cardList" :key="id" class="list-item">
            <div class="card_text"> {{ text }}</div>
            <VButton :class="['card_button']" @click="removeCardHandler(id)"> Удалить</VButton>
        </li>
    </transition-group>
</template>

<style lang="scss" scoped>
.settings_card-List {
    display: flex;
    flex-direction: column;
}

.card_text {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 15px;
}

.card_text,
.card_button {
    width: calc(50% - 20px);
}

.list-item {
    display: flex;
    margin-right: 10px;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 15px;
}

.list-enter-active,
.list-leave-active {
    transition: all 0.5s;
}

.list-enter,
.list-leave-to {
    opacity: 0;
    transform: translateX(30px);
}
</style>