<script>

export default {
    name: 'CardListMain',
    data() {
        return {
        }
    },
    computed: {
        cardList() {
            return this.$store.state.cards.cardList
        },
    },
}
</script>

<template>
    <div>
        <p v-show="!cardList.length">
            Список карточек пуст. <nuxt-link to="/settings">Настройки</nuxt-link>
        </p>
        <transition-group v-show="cardList.length" name="list" tag="ul" class="main_card-List">
            <li v-for="{ id, text } in cardList" :key="id" class="list-item">
                <span class="card_text"> {{ text }}</span>
            </li>
        </transition-group>
    </div>
</template>

<style lang="scss" scoped>
.main_card-List {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    grid-auto-rows: minmax(100px, auto);
}

.list-item {
    border: 2px solid teal;
    border-radius: 5px;
    padding: 5px 5px;
    display: flex;
    align-items: center;
    justify-content: center;
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


@media only screen and (min-width: 768px) {
    .main_card-List {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }

    .list-item {
        border: 1px solid teal;
        padding: 5px 10px;
    }
}

@media only screen and (min-width: 992px) {
    .main_card-List {
        grid-template-columns: repeat(3, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }

    .list-item {
        border: 1px solid teal;
        padding: 10px 10px;
    }
}

@media only screen and (min-width: 1200px) {
    .main_card-List {
        grid-template-columns: repeat(4, 1fr);
        grid-auto-rows: minmax(100px, auto);
    }

    .list-item {
        border: 1px solid teal;
        padding: 15px 10px;
    }
}
</style>