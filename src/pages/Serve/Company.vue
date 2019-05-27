<template>
  <div class="serve--page">
    <div class="serve--page__main">
      <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage"/>
      <div class="adv-section">
        <div class="container">
          <h2 class="adv-title">优质外包团队</h2>
          <p class="adv-description">传统雇佣时代即将过去，在科技背景下，<br>希望能和优秀的企业互相促进，专注擅长领域互为成就。</p>
          <ul class="adv-list">
            <li class="adv-item">
              <div class="adv-item-photo">
                <img class="adv-item-img" src="@/assets/images/serve/company-2.svg">
              </div>
              <div class="adv-item-content">
                <p class="adv-item-title">客户专属顾问</p>
                <p class="adv-item-description">为每位客户提供产品经理定制梳理客户需求，平台为每位客户匹配适合的专属云团队，可根据客户业务变化而适应产品变化。</p>
              </div>
            </li>
            <li class="adv-item">
              <div class="adv-item-content">
                <p class="adv-item-title">SCRUM精细项目管理</p>
                <p class="adv-item-description">基于敏捷迭代，与客户共同梳理MVP产品路线，打造客户最小化可验证路线，打造客户最小化可验证的业务实践。</p>
              </div>
              <div class="adv-item-photo">
                <img class="adv-item-img" src="@/assets/images/serve/company-1.svg">
              </div>
            </li>
            <li class="adv-item">
              <div class="adv-item-photo">
                <img class="adv-item-img" src="@/assets/images/serve/company-3.svg">
              </div>
              <div class="adv-item-content">
                <p class="adv-item-title">实时进度，价值交付</p>
                <p class="adv-item-description">为每位客户交付可落地应用系统，让客户可以及时地投入使用，并提供后续保障服务。</p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <Contact title="期待与您合作" description="期待您的回电，沟通详细需求"/>
      <div class="more-section">
        <More class="w1000" content="Google、Facebook、Tencent ... 前沿技术"/>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './widget/VBanner.vue';
import More from '@/components/BaseMoreInfo.vue';
import Contact from './widget/VContact.vue';
import BannerImage from '@/assets/images/banner/banner-company.svg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '企业研发服务',
        description: '为企业提供专属定制服务，充分免除了您在技术上的顾虑，减少在开发上的成本与时间，让企业能专注于核心业务的推广与运营。我们会深入了解您的业务需求，提供适当的研发建议。',
        backgroundImage: BannerImage
      },
      summary: {
        title: '免费技术支持，助力企业发展',
        description: '我们会深入了解您的业务需求，提供适当的建议，后为您定制专属的服务，并且优化您的资源配置，最大程度上降低您的开发成本与时间。我们的服务涵盖多方面技术： 企业官网/网站、 服务中台、后台、 微信小程序、 移动App。'
      },
    }
  },
  components: {
    More,
    Banner,
    Contact,
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
  }

  .adv-section{
    padding: 40px 0;
    background-color: #fff;

   .container{
     width: 1000px;
     margin: 0 auto;
     text-align: center;

     .adv-list{
      margin-left: 0;
      padding-left: 0;
     }

     .adv-title{
       font-size: 34px;
       color: #2e2f55;
       line-height: 32px;
       margin-bottom: 30px;
     }
     .adv-description{
       font-size: 20px;
       line-height: 35px;
       color: #818182;
       margin-bottom: 100px;
     }

     .adv-list{
       .adv-item{
         display: flex;
         align-items: center;
         justify-content: space-around;
         margin-bottom: 85px;
         
         .adv-item-img{            
           width: 80%;
         }
         .adv-item-content{
           width: 380px;
           text-align: left;
           .adv-item-title{
             font-size: 32px;
             line-height: 32px;
             color: #2e2f55;
             margin-bottom: 22px;
           }
           .adv-item-description{
             font-size: 18px;
             color: #2e2f55;
             line-height: 34px;
             span{
               font-weight: 600;
             }
           }
         }
       }
     }
   }
  }

  .more-section{
    background-color: #fff;
    overflow: hidden;
  }
</style>
