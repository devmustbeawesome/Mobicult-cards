const testList = [
    { id: 1, text: "one" },
    { id: 2, text: "two" },
    { id: 3, text: "three" },
    { id: 4, text: "four" },
]

export const state = () => ({
    cards: [...testList]
})

export const mutations = {
    add(state, card) {
        state.cards.push({ id: Date.now(), text: card })
    },
    remove(state, id) {
        const index = state.cards.findIndex((element) => element.id === id)
        state.cards.splice(index, 1)
    },
}