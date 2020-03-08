import axios from 'axios'

const state = {
    LoginRegisterShow: false,
    isLoggedIn : false,
}

const getters = {
    LoginRegisterShow: (state) => state.LoginRegisterShow,
    isLoggedIn: (state) => state.isLoggedIn,
}

const actions = {

    async login( {commit}, credentials) {
        // checking if the input is valid
        const response = await axios.post('/user/token/', credentials)
        commit('cacheUser', response.data.access)              
    },
    logout({commit}) {
        commit('deleteUserCache')
    },
        
    showform( {commit} ){
        commit('showform')
    },
    toggleFormVisibility ({commit}) {
        commit('toggleFormVisibility')
    },

    CheckLoggedIn({commit}){
        commit('CheckLoggedIn')
        // console.log('fasdfafd')
        // return localStorage.getItem('token') || null !== null
    }
    
}

const mutations = {
    cacheUser: function (state, access_token) {
        localStorage.setItem('token', access_token)
        state.LoginRegisterShow = !state.LoginRegisterShow
        location.reload()
    },
    deleteUserCache: () => (
        localStorage.removeItem('token'),
        location.reload()
    ),
    showform: (state) => (
        state.LoginRegisterShow = true
        ),
    toggleFormVisibility: (state => state.LoginRegisterShow = !state.LoginRegisterShow),
    CheckLoggedIn: (state) => state.isLoggedIn = localStorage.getItem('token') || null !== null


}

export default {
    state,
    getters,
    actions,
    mutations
}