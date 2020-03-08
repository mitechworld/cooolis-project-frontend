<template>
    <div class="container">
            <div class="header">
              در چه زمینه ای میخوای مهارتت رو ارزیابی کنی؟
            </div>
            <div class="category-item" v-for="(category, index1) of allCategories" :key="index1">
                <div class="questoinnaire-item" v-for="(questionnaire, index2) of category.all_questionnaires" :key="index2">
                  <router-link class="link" :to="`/questionnaire/${questionnaire.slug}/${questionnaire.id}`">
                    {{ questionnaire.title }}
                  </router-link>
                </div>
            </div>

    </div>
</template>

<script>
import {  mapGetters, mapActions } from 'vuex'

export default {
    name: "CategoryList",
    data(){
    return {
      questionnaires: [],
    }
  },
    computed: {
      ...mapGetters(['allCategories'])
      },
    methods: {
      ...mapActions(['fetchCategoryList'])
    },
    created() {
      console.log(process.env.VUE_APP_IP)

      this.fetchCategoryList()
  }
}
</script>

<style scoped>
@media(min-width:768px) {
  .category-item {
  display: flex;
  justify-content: center;
  }

}
.header {
  background-color:rgb(236, 235, 218);
  padding: 10px;
  margin: 5px;
}

.questoinnaire-item {
    width: 80%;
    background-color: #eee;
    margin: 12px;
    padding: 15px;
}

.questoinnaire-item:hover {
  background-color:rgb(154, 173, 173);
}


.link {
  color: black;
}
</style>