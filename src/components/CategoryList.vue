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
@media(min-width:768px) {
  .category-item {
  display: flex;
  justify-content: center;
  }

  .category-header span {
    font-size: 30px;
  }


}
.category-header {
  margin: auto;
  position: relative;
  text-align: center;
  color: white;
  font-size: 12px;
  background:black;
  width: 70%;
}
.category-header img{
  /* Add the blur effect */
  opacity: 30%;
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
    width: 80%;
    background-color: #eee;
    margin: 12px;
    padding: 15px;
    border-radius: 5px;

}

.questoinnaire-item:hover {
  background-color:rgb(154, 173, 173);
}


.link {
  color: black;
}
</style>