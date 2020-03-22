<template>
  <div id="app" class="container">

    <header id="questionnaire-header">
      <div id="questionnaire-title">{{ this.title }}</div>
      <div id="questionnaire-description">{{ this.description }} </div>
    </header>

    <QuestionBox v-if="remained_questions"
    :currentQuestion="questions[index]" 
    :next="next"
    ref="questionBoxRef"/>

    <FinalResult v-if="!remained_questions"
    :final_score="final_score"/>
  </div>
</template>


<script>
import axios from 'axios'

import QuestionBox from '../components/QuestionBox.vue'
import FinalResult from '../components/FinalResult.vue'

export default {
  name: 'Questionnaire',
  components: {
    QuestionBox,
    FinalResult,
  },
  data () {
    return {
      questions: [],
      index: 0,
      remained_questions: 0,
      title: '',
      description: '',
      final_score: 0
    }
  },
  methods: {
    next() {
      this.index++
      this.remained_questions--
      if (this.remained_questions === 0) {
        let data = this.$refs.questionBoxRef.all_answers
        axios({
          method: 'post',
          url: 'question/sendanswers/',
          data: data
        })
        .then((response) => {
          this.final_score = response.data.score.toFixed(2)
        }, (error) => {
          console.log(error);
        });
  } 
    }
  },
  mounted: function(){

    let url = `question/questionnaire/${this.$route.params.id}/`

    axios({
      method: 'get',
      url: url,
    })
      .then((response) => {
        this.questions = response.data.questions
        this.remained_questions = this.questions.length
        this.title = response.data.title
        this.description = response.data.description
        }, (error) => {
          console.log(error);
        });

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
