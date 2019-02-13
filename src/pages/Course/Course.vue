<template>
  <div class="course--page">
    <div class="course--page__container w1000">
      <div class="course--page__main">
        <div class="course--info__container">
          <Course :course="course" btnText="" :shadow="false"/>
        </div>
        <div class="course--catalog__container">
          <div class="course--catalog__content">
            <p class="course--catalog__title">学前需知</p>
            <p class="course--catalog__description">{{course.tips}}</p>
          </div>
          <Catalog :course="course" :can-learn="canLearn"/>
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
// import Catalog from './widget/Catalog.vue';
import Catalog from '@/components/Catalog/Catalog.vue';

import More from '@/components/More/More.vue';

export default {
  name: 'Plan',
  data () {
    return {
      course: {},
      canLearn: false,
    }
  },
  created() {
    let id = this.$route.params.id;
    Service.course.info(id).then( res => {
      this.course = res;
    })
    Service.course.buyStatus(id).then( res => {
      this.canLearn = res.can_learn
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

    .course--catalog__container{
      border: 1px solid #e4e4e4;
      margin-top: 10px;
      background: #fff;

      .course--catalog__content{
        padding-top: 10px;

        .course--catalog__title{
          font-size: 16px;
          color: #333;
          line-height: 2;
          padding-left: 20px;
          margin: 0;
          margin-left: -1px;
          border-left: 2px solid #2789d9;
        }

        .course--catalog__description{
          font-size: 12px;
          line-height: 20px;
          color: #666;
          margin: 0 20px;
          padding-bottom: 10px;
        }
      }
    }
  }
</style>
