<template>
  <div class="course--section">
    <router-link :to="{ name:'Course',params: { id: data.id}}" 
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
        id: '2',
        name: 'HTML',
        short_name: '超文本标记语言',
        price: 129,
        duration: 60,
      },{
        id: '3',
        name: 'CSS',
        short_name: '层叠样式表',
        price: 129,
        duration: 120,
      },{
        id: '20',
        name: 'JavaScript Web',
        short_name: '网络的脚本语言',
        price: 99,
        duration: 99,
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
  }
</style>
