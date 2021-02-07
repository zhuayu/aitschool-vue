<template>
  <div class="serve--page">
    <div class="serve--page__main">
      <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage"/>

      <div class="zhiye-section">
        <h2 class="zhiye-title">2021年，前端工程师仍是互联网最炙手可热的岗位之一</h2>
        <p class="zhiye-description">Web前端工程师的平均起薪已飙升到15000元，所有互联网公司都在寻找前端工程师。
          这是需求增长最快的开发岗位，在所有开发职位中排第1</p>
        <div class="zhiye-content" v-if="false">
          <img src="http://j.jikexueyuan.com/Current/home/web_v201904/img/offer-img.png">
        </div>
      </div>

      <div class="worry-section">
        <div class="worry-content w1000">
          <div class="worry-content-left" v-if="false">
            <img class="worry-content-img" src="http://j.jikexueyuan.com/Current/home/web_v201904/img/people2.svg">
          </div>
          <div class="worry-content-right">
            <h3 class="worry-title">零基础入门，我们明白你有这些担心</h3>
            <ul class="worry-list">
              <li class="worry-item">
                <span class="worry-item-index">1</span>
                <p class="worry-item-title">缺少真实的互联网项目经验</p>
                <span class="worry-item-description">0实战经验，简历见不得人</span>
              </li>
              <li class="worry-item">
                <span class="worry-item-index">2</span>
                <p class="worry-item-title">遇到困难没人带路</p>
                <span class="worry-item-description">只有靠自己克服苦难，感觉永远是自己一个人</span>
              </li>
              <li class="worry-item">
                <span class="worry-item-index">3</span>
                <p class="worry-item-title">就业没保障</p>
                <span class="worry-item-description">前景迷茫，担心辛苦学习却还是低薪入职</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="env-section">
        <div class="w1000">
          <h2 class="page-sub-title">1:1 还原工作场景，都给你工作的实在感</h2>
          <p class="page-sub-description">配备舒适宽敞的工位和全品类的技术书籍，地点在城区内，租房、吃饭、宵夜非常方便</p>
          <div class="env-section-photo">
            <div class="env-photo-container">
              <img src="@/assets/images/serve/demo_2.jpg">
              <div class="env-photo-item">
                <img src="@/assets/images/serve/demo_1.jpg">
                <img src="@/assets/images/serve/demo_3.jpg">
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact title="期待你的到来" description="技术成就梦想之美"/>
      <div class="more-section">
        <More class="w1000" content="掌握 Google、Facebook、Tencent ... 前沿技术"/>
      </div>
    </div>


  </div>
</template>

<script>
import More from '@/components/BaseMoreInfo.vue';
import Banner from './widget/VBanner.vue';
import Contact from './widget/VContact.vue';
import BannerImage from '@/assets/images/banner/banner-zhiye.svg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '手摸手，零基础入门',
        description: '新蕾计划源采取录取筛选、每周考核、日日实战的模式，确保为社会输出扎实踏实的技术正规军。专属的导师带入门，领取任务副本，每个任务都来自企业的真实需求。',
        backgroundImage: BannerImage
      },
      summary: {
        title: '新蕾计划',
        description: '新蕾计划源愿望在一年时间，为互联网培养专业的技术人员。采取录取筛选、每周考核、日日实战的模式，确保为社会输出扎实踏实的技术正规军。 1 : 1 还原真实的互联网工作环境，宽阔办公环境、舒适座椅、超快网络，以及一切项目开发你所需要的工具及专业书籍。专属的导师带入门，领取任务副本，每个任务都来自企业的真实需求。每天实战打怪升级，每个人都由自己的级别，从 1 级到 21 级。'
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

  .zhiye-section{
    padding: 80px 0;
    background-color: #f8fafe;
    text-align: center;
    
    .zhiye-title {
      font-size: 30px;
      font-weight: 500;
      color: #333;
      line-height: 42px;
    }

    .zhiye-description {
      margin-top: 20px;
      font-size: 16px;
      color: #666;
      line-height: 22px;
    }
  }

  .worry-section{
    padding: 80px 0;
    background-color: #fff;

    .worry-content{
      display: flex;
      .worry-content-left{
        width: 360px;
        padding-top: 76px;
        margin-right: 147px;
        text-align: center;
      }
      .worry-content-right{
        flex: 1;
        text-align: left;
      }

      .worry-title {
        color: #333;
        font-size: 30px;
        font-weight: 500;
        line-height: 42px;
        margin-bottom: 40px;
      }

      .worry-list {
        padding-left: 0;
      }

       .worry-item {
        position: relative;
        padding-left: 30px;
        margin-bottom: 40px;
        list-style-type: none;
      }

      .worry-item-index {
        position: absolute;
        width: 20px;
        height: 20px;
        background: linear-gradient(315deg, #30c2fc 0%, #8a3efc 100%);
        top: 0;
        left: 0;
        border-radius: 50%;
        font-size: 12px;
        font-weight: 500;
        color: #fff;
        line-height: 20px;
        text-align: center;
      }

      .worry-item-title {
        font-size: 16px;
        font-weight: 500;
        color: #333;
        line-height: 22px;
      }

       .worry-item-description {
        margin-top: 6px;
        font-size: 12px;
        color: #666;
        line-height: 18px;
      }
    }
  }

  .env-section{
    padding: 80px 0;
    text-align: center;
    background-color: #f8fafe;

    .page-sub-title {
      font-size: 30px;
      font-weight: 500;
      color: #333;
      line-height: 42px;
    }

    .page-sub-description {
      font-size: 16px;
      line-height: 22px;
      color: #666;
      margin-top: 20px;
    }

    .env-section-photo{
      width: 1000px;
      margin: 60px auto 0;
      color: #666;
    }
    .env-photo-container{
      display: flex;
      width: 1000px;

      .env-photo-item{
        display: inline-flex;
        justify-content: space-between;
        flex-direction: column;
        margin-left: 20px;

        img{
          width: 100%;
          height: auto;
        }
      }
    }
  }

  .more-section{
    background-color: #fff;
    overflow: hidden;
  }

</style>
