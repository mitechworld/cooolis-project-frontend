<template>
  <div class="home">
    <CategoryList />
  </div>
</template>

<script>
import CategoryList from '../components/CategoryList'

export default {
  name: "Home",
  components: {
    CategoryList,
  },
  created () {
    // document.title = "کولیس :: ابزاری برای ارزیابی مهارت شما";
  }
}
</script>