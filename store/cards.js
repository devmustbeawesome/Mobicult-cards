export const state = () => {
    const cardsState = { cardList: [] }
    return cardsState
}
export const actions = {
    init(context) {
        if (process.client) {
            context.commit('refreshCardList');
            window.addEventListener('storage', (e) => {
                if (e.key === "cards-store")
                    context.commit('refreshCardList');
            })
        }
    },
}

export const mutations = {
    add(state, card) {
        if (card.trim() === "")
            return false
        state.cardList.push({ id: Date.now(), text: card })
        const jsonData = JSON.stringify(state)
        localStorage.setItem('cards-store', jsonData)
    },
    remove(state, id) {
        const index = state.cardList.findIndex((element) => element.id === id)
        state.cardList.splice(index, 1)
        const jsonData = JSON.stringify(state)
        localStorage.setItem('cards-store', jsonData)
    },
    change(state, { id, text }) {
        const index = state.cardList.findIndex((element) => element.id === id)
        state.cardList.splice(index, 1, { id, text })
        const jsonData = JSON.stringify(state)
        localStorage.setItem('cards-store', jsonData)
    },
    refreshCardList(state) {
        try {
            const storage = localStorage.getItem('cards-store')
            if (storage) {
                state.cardList = JSON.parse(storage).cardList
            } else {
                const jsonData = JSON.stringify({ cardList: state.cardList })
                localStorage.setItem('cards-store', jsonData)
            }
        } catch (error) {
            console.log(error)
        }
    },
}