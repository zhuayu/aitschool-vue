<template>
  <div class="blog--page">
    <div class="blog--page__container w1000">
      <div class="blog--page__main">
        <Loading class="blog--main__contaienr" :loading="loading">
          <h2 class="blog--content__title">{{blog.title}}</h2>
          <Marked :content="blog.content || '暂无内容'"></Marked>
        </Loading>
        <More content="脚踏实地，仰望星空"/>
      </div>
      <Aside class="blog--page__side"/>
    </div>
  </div>
</template>

<script>

import Aside from '@/components/TheSidebar.vue';
import Service from '@/global/service/index.js';
import Marked from '@/components/BaseMarkdown'
import More from '@/components/BaseMoreInfo.vue';
import Loading from '@/components/BaseLoadingCircle.vue';

export default {
  name: 'blog',
  data () {
    return {
      blog: {},
      loading: true,
    }
  },
  created() {
    let id = this.$route.params.id;
    Service.blog.info(id).then( res => {
      this.blog = res;
      this.loading = false
    })
  },
  components: {
    Aside,
    More,
    Loading,
    Marked
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .blog--page__container{
    display: flex;
    padding: 20px;

    .blog--page__main{
      flex: 1;
    }

    .blog--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }

    .blog--main__contaienr{
      background-color: #fff;
      padding: 20px;
    }

    .blog--content__title{
      text-align: center;
      color: #333;
      margin: 40px 0;
    }
  }
</style>
