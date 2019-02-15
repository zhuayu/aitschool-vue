<template>
  <div class="serve--page">
    <div class="serve--page__container w1000">
      <div class="serve--page__main">
        <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage" />
        <div class="serve--summary__section">
          <p class="serve--summary__title">免费技术支持，助力企业发展</p>
          我们会深入了解您的业务需求，提供适当的建议，后为您定制专属的服务，并且优化您的资源配置，最大程度上降低您的开发成本与时间。我们的服务涵盖多方面技术： 企业官网/网站、 服务中台、后台、 微信小程序、 移动App。
        </div>
        <div class="serve--point__section">
          <ul class="serve--point__list">
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_7.png" alt="网站构建">
              <p class="serve--point__title">网站构建</p>
              <p class="serve--point__desc">企业产品展示<br>塑造良好的企业形象</p>
            </li>
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_8.jpg" alt="微信小程序">
              <p class="serve--point__title">微信小程序</p>
              <p class="serve--point__desc">定制开发功各类型小程序<br>帮助企业更好地推广及营销</p>
            </li>
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_9.png" alt="信息后台">
              <p class="serve--point__title">信息后台</p>
              <p class="serve--point__desc">企业信息化可视化管理<br>提高企业管理效率</p>
            </li>
          </ul>
        </div>
        <div class="serve--demo__section">
          <div class="serve--demo__list">
            <div class="serve--demo__item">
              <img src="@/assets/images/serve/logo_jike.jpg" class="serve--demo__img">
              <div class="serve--demo__content">
                <div class="serve--demo__title">极客学院</div>
                <div class="serve--demo__desc">极客学院作为中国专业IT职业在线教育平台,拥有海量高清IT职业课程,涵盖30+个技术领域。帮助IT学习者从零基础起步,结合IT实战案例演练,系统学习,助你快速成为IT优秀技术人才！</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img  src="@/assets/images/serve/logo_youke.png" class="serve--demo__img">
              <div class="serve--demo__content">
                <div class="serve--demo__title">优课云坊</div>
                <div class="serve--demo__desc">优课云坊是一个专业从事 IT 职业技术类课程研发与制作的内容平台，我们希望通过生产更多、更好的学习内容，让更多人能够掌握和精进互联网开发的知识和技能，从而更好地用技术改变生活。</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img  src="@/assets/images/serve/logo_prodegree.png" class="serve--demo__img">
              <div class="serve--demo__content">
                <div class="serve--demo__title">职业学位</div>
                <div class="serve--demo__desc">职业学位将为你提供专业的技能认证，以通用的职级体系为标准，出具权威行业证书，证明你的技术实力与专业水平。</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img  src="@/assets/images/serve/logo_toppro.jpg" class="serve--demo__img">
              <div class="serve--demo__content">
                <div class="serve--demo__title">Toppro 未来用工</div>
                <div class="serve--demo__desc">Toppro 致力于构建优秀人才网络，为优秀的企业提供服务，核心解决企业发展过程中对专业人才辨识难、招聘周期长、综合成本高、管理复杂等问题。</div>
              </div>
            </div>
          </div>
        </div>
        <More content="更多校园公开课信息，欢迎咨询：13502222677"/>
      </div>
      <Aside class="serve--page__side"/>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue';
import More from '@/components/More/More.vue';
import Banner from './widget/Banner.vue';
import BannerImage from '@/assets/images/common/banner/hero-banner-2.jpg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '企业服务',
        description: '为企业提供免费的专属定制服务，充分免除了您在技术上的顾虑，减少在开发上的成本与时间，让企业能专注于核心业务的推广与运营。',
        backgroundImage: BannerImage
      }
    }
  },
  components: {
    More,
    Aside,
    Banner
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

  .serve--summary__section{
    background: #fff;
    padding: 20px;
    font-size: 16px;
    color: #666;

    .serve--summary__title{
      position: relative;
      margin: 20px 0;
      font-size: 18px;
      color: #0089de;
      &:after{
        display: inline-block;
        width: 60px;
        height: 2px;
        background: #0089de;
        position: absolute;
        bottom: -10px;
        left: 0;
        content: '';
      }
    }
  }

  .serve--point__section{
    background: #fff;
    .serve--point__list{
      margin-top: 10px;
      display: flex;
      justify-content: space-around;
      margin: 0;
      padding: 0;
      list-style: none;
      .serve--point__item{
        margin: 0;
        padding: 0;
        text-align: center;
        padding: 20px;

        .serve--point__img{
          display: block;
          height: 200px;
          width: 200px;
          // background: #f5f5f5;
          margin-bottom: 10px;
        }
        .serve--point__title{
          margin: 0;
          color: #333;
          font-size: 16px;
          margin-bottom: 5px;
        }
        .serve--point__desc{
          margin: 0;
          font-size: 14px;
          color: #666;
        }
      }
    }
  }

  .serve--demo__section{
    background: #fff;
    padding: 20px;
    .serve--demo__item{
      display: flex;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }

    .serve--demo__img{
      width: 200px;
      margin-right: 20px;
      height: 200px;
      // background: #f1f1f1;
    }

    .serve--demo__content{
      flex: 1;
    }
    
    .serve--demo__title{
      position: relative;
      font-size: 18px;
      margin: 16px 0;
      color: #333;
      &:after{
        display: inline-block;
        width: 30px;
        height: 2px;
        background: #0089de;
        position: absolute;
        bottom: -10px;
        left: 0;
        content: '';
      }
    }
    .serve--demo__desc{
      color: #666;
      font-size: 14px;
    }
  }
</style>
