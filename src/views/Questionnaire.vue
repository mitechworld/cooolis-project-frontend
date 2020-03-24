<template>
  <div id="app" class="container">

    <header id="questionnaire-header">
      <div id="questionnaire-title">{{ this.title }}</div>
      <div id="questionnaire-description">{{ this.description }} </div>
    </header>

    <QuestionBox v-if="show_questions"
    :currentQuestion="questions[index]" 
    :next="next"
    ref="questionBoxRef"/>

    <FinalResult v-else
    :final_score="final_score"/>
  </div>
</template>


<script>
// import axios from 'axios'

import QuestionBox from '../components/QuestionBox.vue'
import FinalResult from '../components/FinalResult.vue'

import {  mapGetters, mapActions } from 'vuex'


export default {
  name: 'Questionnaire',
  components: {
    QuestionBox,
    FinalResult,
  },
  data () {
    return {
      index: 0,
      show_questions: true
    }
  },
  methods: {
    ...mapActions(['fetchQuestionList', 'sendAnswers']),

    next() {
      this.index++
      if (this.index === this.number_of_questions){
        this.show_questions = false
      }

    if (!this.show_questions) {
      this.sendAnswers(this.$refs.questionBoxRef.all_answers)  
    }

  //     if (!this.show_questions) {
  //       let data = this.$refs.questionBoxRef.all_answers
  //       axios({
  //         method: 'post',
  //         url: 'question/sendanswers/',
  //         data: data
  //       })
  //       .then((response) => {
  //         this.final_score = response.data.score.toFixed(2)
  //       }, (error) => {
  //         console.log(error);
  //       }
  //       );
  // } 
    },

  },
  mounted() {
    this.fetchQuestionList(this.$route.params.id)
  },
  computed: { 
    
  ...mapGetters(['questions','number_of_questions', 'title', 'description', 'final_score']),


  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#questionnaire-header{
  background:#e4f1f7;
  margin-bottom: -2px;
  padding: 12px;
}

#questionnaire-title{
  font-size: 21px;
}

#questionnaire-description{
  font-size: 15px;
}

</style>
