<template>
  <div class="home--page">
    <div class="home--page__container w1000">
      <div class="home--page__main">
        <Banner/>
        <Course/>
        <Plan/>
        <Partner/>
      </div>
      <Aside class="home--page__side"/>
    </div>
  </div>
</template>

<script>
import Banner from './widget/Banner.vue';
import Plan from './widget/Plan.vue';
import Course from './widget/Course.vue';
import Partner from './widget/Partner.vue';

import Aside from './widget/Aside.vue';

export default {
  name: 'home',
  components: {
    Banner,
    Plan,
    Course,
    Partner,
    Aside
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .home--page__container{
    display: flex;
    padding: 20px;

    .home--page__main{
      flex: 1;
    }

    .home--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }
  }
</style>
