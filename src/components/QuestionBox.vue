<template>
    <div class="jumbotron">
        <h3>{{ currentQuestion.text }}</h3>
        <p class="question-type"> {{this.qtypes[currentQuestion.question_type] }} </p>
        <ul class="list-group">
            <li class="list-group-item" 
            v-for="(option, index) of shuffledOptions" 
            :key="index"
            @click="selectAnswer(index)"
            :class="[selectedIndices.includes(index) ? 'selected' : '']">
                {{ option.text }}
            </li>
        </ul>
        <button type="button" class="btn btn-dark" @click="submitAnswer">بعدی</button>
    </div>
</template>

<script>
import _ from 'lodash'
export default {
    name: 'QuestionBox',
    props: {
        currentQuestion: Object,
        next: Function
    },
    data(){
        return {
            selectedIndices: [],
            shuffledOptions: [],
            all_answers: [],
            selected_options: [],
            qtypes: {
                'OA': 'فقط یک گزینه قابل انتخاب است',
                'MA': 'می تواند چند گزینه صحیح باشد'
            }
        }
    },
    watch:{
        // currentQuestion() {
        //     this.selectedIndex = null
        //     this.shuffleAnswers()
        // }
        currentQuestion: {
            immediate: true,
            handler(){
                this.selectedIndex = null
                this.shuffleOptions()
            }
        }
    },
    methods: {
        selectAnswer(index){
            if (this.currentQuestion.question_type === 'OA') {
                this.selectedIndices = []
                this.selectedIndices.push(index)
            }
            else {


            if (this.selectedIndices.includes(index)) {
                this.selectedIndices = this.selectedIndices.filter(function(ele){
                    return ele != index;
                });
            }
            else {
                this.selectedIndices.push(index)
            }
            }
        },
        shuffleOptions () {
            let available_options = [...this.currentQuestion.available_options]
            this.shuffledOptions = _.shuffle(available_options)
        },
        submitAnswer () {
            this.selectedOptions()
            let current_answer = {
                'question_id': this.currentQuestion.id,
                'selected_options': this.selected_options
            }
            this.all_answers.push(current_answer)
            this.selectedIndices = []
            this.selected_options = []
            this.next()
        },

        selectedOptions () {
            this.selectedIndices.forEach((item) => {
                let option = this.shuffledOptions[item]
                this.selected_options.push({'id':option.id})
            })
            
        }

    }
}
</script>

<style scoped>
.list-group{
   margin-bottom: 5px; 
}

.list-group-item:hover {
    background: #eee;
    cursor: pointer;
}

.selected {
    background-color: lightblue; 
}

.question-type {
    background-color: lightpink;
    padding:2px;
    
}


</style>