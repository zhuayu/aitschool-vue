<template>
  <div class="serve--page">
    <div class="serve--page__container w1000">
      <div class="serve--page__main">
        <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage" />
        <Summary  :title="summary.title" :description="summary.description" />
        <Point :points="points" />
        <Demo :demos="demos" image-width="120px"/>
        <More content="企业合作目前仅限广州市增城区，欢迎咨询：13502222677"/>
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


import BannerImage from '@/assets/images/common/banner/hero-banner-2.jpg';
import PointImage_1 from '@/assets/images/serve/point_7.png';
import PointImage_2 from '@/assets/images/serve/point_8.jpg';
import PointImage_3 from '@/assets/images/serve/point_9.png';
import demoImage_1 from '@/assets/images/serve/logo_jike.jpg';
import demoImage_2 from '@/assets/images/serve/logo_youke.png';
import demoImage_3 from '@/assets/images/serve/logo_prodegree.png';
import demoImage_4 from '@/assets/images/serve/logo_toppro.jpg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '企业服务',
        description: '为企业提供免费的专属定制服务，充分免除了您在技术上的顾虑，减少在开发上的成本与时间，让企业能专注于核心业务的推广与运营。',
        backgroundImage: BannerImage
      },
      summary: {
        title: '免费技术支持，助力企业发展',
        description: '我们会深入了解您的业务需求，提供适当的建议，后为您定制专属的服务，并且优化您的资源配置，最大程度上降低您的开发成本与时间。我们的服务涵盖多方面技术： 企业官网/网站、 服务中台、后台、 微信小程序、 移动App。'
      },
      points: [{
        image: PointImage_1,
        title: '网站构建',
        description: '塑造良好的企业形象'
      },{
        image: PointImage_2,
        title: '小程序',
        description: '定制开发功各类型小程序'
      },{
        image: PointImage_3,
        title: '管理后台',
        description: '提高企业管理效率'
      }],
      demos: [{
        image: demoImage_1,
        title: '极客学院',
        description: '极客学院作为中国专业IT职业在线教育平台,拥有海量高清IT职业课程,涵盖30+个技术领域。帮助IT学习者从零基础起步,结合IT实战案例演练,系统学习,助你快速成为IT优秀技术人才！'
      },{
        image: demoImage_2,
        title: '优课云坊',
        description: '优课云坊是一个专业从事 IT 职业技术类课程研发与制作的内容平台，我们希望通过生产更多、更好的学习内容，让更多人能够掌握和精进互联网开发的知识和技能，从而更好地用技术改变生活。'
      },{
        image: demoImage_3,
        title: '职业学位',
        description: '职业学位将为你提供专业的技能认证，以通用的职级体系为标准，出具权威行业证书，证明你的技术实力与专业水平。'
      },{
        image: demoImage_4,
        title: 'Toppro 未来用工',
        description: 'Toppro 致力于构建优秀人才网络，为优秀的企业提供服务，核心解决企业发展过程中对专业人才辨识难、招聘周期长、综合成本高、管理复杂等问题。'
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
