import axios from 'axios'

const state = {
    questions : [],
    number_of_questions : 0,
    title : '',
    description : '',
    final_score: 0
}

const getters = {
    questions: (state) => state.questions,
    number_of_questions: (state) => state.number_of_questions,
    title: (state) => state.title,
    description: (state) => state.description,
    final_score: (state) => state.final_score
}

const actions = {
    async fetchQuestionList({ commit }, questionnaire_id) {
        let url = `question/questionnaire/${questionnaire_id}/`
        const response = await axios.get(url)
        commit('setQuestions', response.data)
    },

    async sendAnswers({commit}, data) {
        const response = await axios({
          method: 'post',
          url: 'question/sendanswers/',
          data: data
        })
        commit('setResults', response.data)
    }
}

const mutations = {
    setQuestions: (state, data) => (
        state.questions = data.questions,
        state.number_of_questions = data.questions.length,
        state.title = data.title,
        state.description = data.description
    ),

    setResults: (state, data) => (
        state.final_score = data.score.toFixed(2)
    )
}

export default {
    state,
    getters,
    actions,
    mutations
}