import axios from 'axios'

const state = {
    categories: []
}

const getters = {
    allCategories: (state) => state.categories
}

const actions = {
    async fetchCategoryList( {commit }) {
        const response = await axios.get('/question/categories/')
        commit('setCategories', response.data)
    }
}

const mutations = {
    setCategories: (state, categories) => (state.categories = categories)
}

export default {
    state,
    getters,
    actions,
    mutations
}