<template>
  <div class="course--section">
    <router-link class="course--section__link" :to="{ name:'Course',params: { id: data.id}}" 
      v-for="(data,index) in courses" :key="index"><CourseCard :course="data"/></router-link>
  </div>
</template>

<script>
import CourseCard from '@/components/CourseCard/CourseCard_2.vue';
export default {
  name: 'Plan',
  data() {
    return {
      courses: [{
        id: 11,
        name: 'Cold Boot',
        short_name: '冷启动',
        price: 0,
        duration: 60,
      },{
        id: 2,
        name: 'HTML',
        short_name: '超文本标记语言',
        price: 99,
        duration: 60,
      },{
        id: 3,
        name: 'CSS',
        short_name: '层叠样式表',
        price: 99,
        duration: 120,
      }]
    }
  },
  components: {
    CourseCard
  }
}
</script>

<style lang="less" scoped>
  .course--section{
    margin-top: 10px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;
    .course--section__link{
      font-size: 0;
    }
  }
</style>
