<template>
  <div class="course--page">
    <div class="course--page__container w1000">
      <div class="course--page__main">
        <div class="course--info__container">
          <Course :course="course" btnText="" :shadow="false"/>
        </div>
        <div class="course--catalog">
          <Catalog :course="course"/>
        </div>
        <More/>
      </div>
      <Aside class="course--page__side"/>
    </div>
  </div>
</template>

<script>

import Aside from '@/components/Aside/Aside.vue';
import Service from '@/global/service/index.js';
import Course from '@/components/CourseCard/CourseCard_1.vue';
import Catalog from './widget/Catalog.vue';
import More from '@/components/More/More.vue';


export default {
  name: 'Plan',
  data () {
    return {
      course: {}
    }
  },
  created() {
    let id = this.$route.params.id;
    Service.course.info(id).then( res => {
      this.course = res;
    })
  },
  components: {
    Aside,
    Course,
    Catalog,
    More
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .course--page__container{
    display: flex;
    padding: 20px;

    .course--page__main{
      flex: 1;
    }

    .course--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }

    .course--catalog{
      // box-sizing: border-box;
      // padding: 20px;
      // margin-top: 10px;
      // min-height: 127px;
      // background: #fff;
    }
  }
</style>
