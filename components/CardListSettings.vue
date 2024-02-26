<script>
import { mapMutations } from 'vuex'

export default {
    name: 'CardListSettings',
    props: {
    },
    data() {
        return {
        }
    },
    computed: {
        cardList: function () {
            return this.$store.state.cards.cardList
        }
    },

    methods: {
        ...mapMutations({
            removeCardHandler: 'cards/remove',
            changeCardHandler: 'cards/change',
        }),
        changeCard: function (id, text) {
            if (text.trim() === "")
                return false
            this.changeCardHandler({ id, text });
        },
    },
}

</script>

<template>
    <div>
        <transition-group name="list" tag="ul" class="settings_card-list">
            <li v-for="(cardItem, index) in    cardList   " :key="cardItem.id" class="list-item">
                <VInput :value="cardList[index].text" :class="['card_input']"
                    @input="(text) => changeCard(cardItem.id, text)" />
                <VButton :class="['card_button']" @click="removeCardHandler(cardItem.id)"> Удалить</VButton>
            </li>
        </transition-group>
    </div>
</template>

<style lang="scss" scoped>
.settings_card-List {
    display: flex;
    flex-direction: column;
}

.list-item {
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 10px;
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

@media only screen and (max-width: 768px) {
    .list-item {
        display: block;
        margin-bottom: 10px;
        padding-bottom: 10px;
        direction: rtl;
        border-bottom: 1px solid black;
    }

    .card_button {
        display: block;
    }

    .card_input {
        direction: ltr;
        margin-bottom: 5px;
    }
}
</style>