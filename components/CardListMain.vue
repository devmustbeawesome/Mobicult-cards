<script>

export default {
    name: 'CardListMain',
    data() {
        return {
        }
    },
    computed: {
        cardList() {
            return this.$store.state.cards.cards
        },
    },


}
</script>

<template>
    <transition-group name="list" tag="ul" class="main_card-List">
        <li v-for="{ id, text } in cardList" :key="id" class="list-item">
            <span class="card_text"> {{ text }}</span>
        </li>
    </transition-group>
</template>

<style lang="scss" scoped>
.main_card-List {
    align-content: flex-start;
    align-items: stretch;
    flex-direction: row;
    flex-wrap: wrap;
    display: flex;
    flex-grow: 1;
    justify-content: space-between;
}

/* .card_text {
    border: 1px solid black;
    border-radius: 5px;
    padding: 10px 15px;
    width: calc(20% - 16px);
    margin-bottom: 16px;
} */

.list-item {
    border: 2px solid teal;
    border-radius: 5px;
    padding: 10px 15px;
    width: calc(25% - 16px);
    margin-bottom: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 80px;
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