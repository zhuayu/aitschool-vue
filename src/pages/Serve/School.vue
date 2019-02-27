<template>
  <div class="serve--page">
    <div class="serve--page__container w1000">
      <div class="serve--page__main">
        <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage" />
        <Summary  :title="summary.title" :description="summary.description" />
        <Point :points="points" />
        <Demo :demos="demos" />
        <More content="更多校园公开课信息，欢迎咨询：13502222677"/>
      </div>
      <Aside class="serve--page__side"/>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/TheSidebar.vue';
import More from '@/components/BaseMoreInfo.vue';
import Banner from './widget/Banner.vue';
import Summary from './widget/Summary.vue';
import Point from './widget/Point.vue';
import Demo from './widget/Demo.vue';


import BannerImage from '@/assets/images/common/banner/hero-banner-3.jpg';
import PointImage_1 from '@/assets/images/serve/point_1.png';
import PointImage_2 from '@/assets/images/serve/point_2.png';
import PointImage_3 from '@/assets/images/serve/point_3.png';
import demoImage_1 from '@/assets/images/serve/demo_6.jpeg';
import demoImage_2 from '@/assets/images/serve/demo_5.jpeg';
import demoImage_3 from '@/assets/images/serve/demo_7.jpeg';
import demoImage_4 from '@/assets/images/serve/demo_8.jpeg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '院校合作',
        description: '实现教育民主化，将稀缺、前沿的科技教育，带到每一个人身旁。',
        backgroundImage: BannerImage
      },
      summary: {
        title: '将优质的内容带给每一个人',
        description: '新的科技知识，大概每两年会增加一倍。对读大学的学生来说，很多他们在一年级、二年级所学的知识，在大三年级时就全部过时。技术的发展正快速更迭着人类维持生产力增长所需的能力，而现有教育体系已经无法满足这些需求。我们希望在这个全新的时代中，以新的内容，新的形式，为体制教育做一些新的补充。'
      },
      points: [{
        image: PointImage_1,
        title: 'IT 公开课',
        description: '产品 & 设计 & 研发'
      },{
        image: PointImage_2,
        title: '编程马拉松比赛',
        description: '系统学习，成果输出'
      },{
        image: PointImage_3,
        title: '职业规划指导',
        description: '来自职场的一手资料'
      }],
      demos: [{
        image: demoImage_1,
        title: '清华大学编程马拉松',
        description: '一次基于敏捷开发理论的 36 小时编程马拉松活动。在活动中，参赛者通过企业真实的开发场景，实现快速学习，以紧密合作的形式去头脑风暴，产出产品创意和进行项目开发。'
      },{
        image: demoImage_2,
        title: '华商学院编程马拉松',
        description: '华商学院编程马拉松，为期一个月的培训，从零基础学习小程序。800 + 参与，线上学习、线下辅导、编程精神。本地第一次编程开发马拉松，希望在增城，更多人能体验到编程的乐趣。'
      },{
        image: demoImage_3,
        title: '银联编程马拉松',
        description: '有什么比一屋子程序员一起敲代码更开心的事情？编程马拉松，就给程序员们创造了一个高效编程，专注开发核心架构、尽情释放天性的机会。此时此刻，一大波程序员正在堪称本年度技术导师阵容最强大的Hackathon上忘我的敲着代码。'
      },{
        image: demoImage_4,
        title: '校园项目实训',
        description: '把职业项目带进校园，职业技能在校实训进行中 ～'
      }]
    }
  },
  components: {
    More,
    Aside,
    Banner,
    Summary,
    Point,
    Demo
  }
}
</script>

<style lang="less" scoped>
  .serve--page__container{
    display: flex;
    padding: 20px;

    .serve--page__main{
      flex: 1;
    }

    .serve--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }
  }
</style>
