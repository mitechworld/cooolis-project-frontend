import Vuex from 'vuex'
import Vue from 'vue'

import Categories from './modules/Categories'
import User from './modules/User'
import Questions from './modules/Questions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        Categories,
        User,
        Questions
    }
})
