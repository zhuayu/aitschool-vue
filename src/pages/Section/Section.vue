<template>
  <div class="sections--page">
    <div class="sections--page__container w1000">
      <div class="sections--page__main">
        <div class="section--main__container" ref="sectionMainer">
          <Loading :loading="loading">
            <Video v-if="video_url" :url="video_url"></Video>
            <Marked :content="section.content || '暂无内容'"></Marked>
          </Loading>
        </div>
      </div>
      <div class="sections--page__side">
        <div class="course--catalog__container">
          <div class="course--catalog__content">
            <p class="course--catalog__title">{{course.name}}</p>
            <p class="course--catalog__description">{{course.short_name}}</p>
          </div>
          <Catalog :course="course" :can-learn="true" :section_id="section_id"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loading from '@/components/Loading/Circle.vue';
import Catalog from '@/components/Catalog/Catalog.vue';
import Marked from '@/components/Mark'
import Video from '@/components/Video'
import Service from '@/global/service/index.js';

export default {
  name: 'Section',
  data () {
    return {
      course: {},
      section: {},
      video_url: null,
      section_id: 0,
      course_id: 0,
      chapter_id: 0,
      loading: true
    }
  },
  created() {
    this.fetchData();
  },
  watch: {
    '$route': 'fetchData'
  },
  methods: {
    fetchData() {
      let params = this.$route.params;
      let course_id = params.course_id;
      let chapter_id = params.chapter_id;
      let section_id = params.section_id;
      let courseInfo = Service.course.info(course_id);
      let sectionInfo = Service.section.info(section_id);
      this.loading = true;
      Promise.all([courseInfo, sectionInfo]).then( res => {
        this.course_id = course_id;
        this.chapter_id = chapter_id;
        this.section_id = section_id;
        this.course = res[0];
        this.section = res[1];
        this.video_url = this.section.video_url;
        this.loading = false
        this.gotoTop();
      })
    },
    gotoTop() {
      // 切换小节滚动到顶部
      // let sectionMainerDOM = this.$refs.sectionMainer;
      // if(sectionMainerDOM){
      //   console.log(sectionMainerDOM)
      //   sectionMainerDOM.scrollTop = 0;
      // }
      document.documentElement.scrollTop = 0;
    }
  },
  components: {
    Catalog,
    Marked,
    Video,
    Loading
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .sections--page__container{
    display: flex;
    padding: 20px;

    .sections--page__main{
      flex: 1;
    }

    .sections--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;

      .course--catalog__container{
        background: #fff;
        border: 1px solid #e4e4e4;
        min-height: 584px;
      }

      .course--catalog__content{
        padding: 10px 0;

        .course--catalog__title{
          font-size: 16px;
          color: #333;
          line-height: 2;
          padding: 0 10px;
          margin: 0;
          margin-left: -1px;
          border-left: 2px solid #2789d9;
          word-break: break-all;
        }

        .course--catalog__description{
          font-size: 12px;
          line-height: 20px;
          color: #666;
          margin: 0 10px;
        }
      }
    }

    .section--main__container{
      min-height: 240px;
      background: #fff;
      padding: 20px;
    }
  }
</style>
