<template>
  <div class="plan--page">
    <div class="plan--page__container w1000">
      <div class="plan--page__main">
        <Loading class="plan--main__contaienr" :loading="loading">
          <div class="plan--info__container" v-show="plan.id">
            <div class="plan--info__left">
              <img class="plan--info__image" :src="plan.image_path" />
            </div>
            <div class="plan--info__right">
              <div class="plan--info__title">{{plan.name}}</div>
              <div class="plan--info__desc">{{plan.description}}</div>
            </div>
          </div>
          <div class="plan--course__container" v-show="plan.id">
            <router-link :to="{ name:'Course',params: { id: data.id}}" class="plan--course__item" v-for="(data,index) in plan.courses" :key="index">
              <Course :course="data" :sub-text="plan.name"/>
            </router-link>
          </div>
        </Loading>
        <More content="更多 Google、Facebook、Tencent 前沿课程，敬请期待 ～"/>
      </div>
      <Aside class="plan--page__side"/>
    </div>
  </div>
</template>

<script>

import Aside from '@/components/Aside/Aside.vue';
import Service from '@/global/service/index.js';
import Course from '@/components/CourseCard/CourseCard_2.vue';
import More from '@/components/More/More.vue';
import Loading from '@/components/Loading/Circle.vue';

export default {
  name: 'Plan',
  data () {
    return {
      plan: {},
      loading: true,
    }
  },
  created() {
    let id = this.$route.params.id;
    Service.plan.info(id).then( res => {
      this.plan = res;
      this.loading = false
    })
  },
  components: {
    Aside,
    Course,
    More,
    Loading
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .plan--page__container{
    display: flex;
    padding: 20px;

    .plan--page__main{
      flex: 1;
    }

    .plan--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }
  }

  .plan--info__container{
    box-sizing: border-box;
    min-height: 200px;
    display: flex;
    background-color: #fff;
    padding: 10px;

    .plan--info__left{
      width: 300px;
      margin-right: 10px;
    }
    .plan--info__right{
      flex: 1;
    }
    .plan--info__image{
      display: block;
      height: 180px;
      width: 300px;
    }
    .plan--info__title{
      font-size: 24px;
      line-height: 2;
      color: #333;
    }
    .plan--info__desc{
      font-size: 14px;
      line-height: 22px;
      color: #666;
      text-align: justify;
    }
  }

  .plan--course__container{
    margin-top: 10px;
    display: flex;
    flex-wrap: wrap;
    .plan--course__item{
      width: 240px;
      height: 294px;
      margin-bottom: 10px;
      &:not(:nth-child(3n)){
        margin-right: 10px;
      }
      &:last-child{
        margin-right: 0;
      }
    }
  }
</style>
