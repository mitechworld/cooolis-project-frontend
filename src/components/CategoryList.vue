<template>
    <div class="container">
            <div class="category-header">
              <img src="../assets/navbarbg1.png" alt="">
              <span>در چه زمینه ای میخوای مهارتت رو ارزیابی کنی؟</span>
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


.category-header {
  margin: auto;
  position: relative;
  text-align: center;
  color: white;
  font-size: 15px;
  background:black;
  width: 70%;
}
.category-header img{
  opacity: 0.2;
  width: 100%;
  height: auto;
}

.category-header span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

}


.questoinnaire-item {
    width: 70%;
    background-color: #eee;
    padding: 15px;
    border-radius: 5px;
    margin: 10px auto;
}

.questoinnaire-item:hover {
  background-color:rgb(154, 173, 173);
}


.link {
  color: black;
}


@media(min-width:768px) {
  .category-item {
  display: flex;
  justify-content: center;
  }

  .category-header span {
    font-size: 30px;
  }

  .questoinnaire-item {
        margin: 10px;
  }

}



</style>