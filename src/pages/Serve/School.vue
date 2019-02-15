<template>
  <div class="serve--page">
    <div class="serve--page__container w1000">
      <div class="serve--page__main">
        <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage" />
        <div class="serve--summary__section">
          <p class="serve--summary__title">将优质的内容带给每一个人</p>
          新的科技知识，大概每两年会增加一倍。对读大学的学生来说，很多他们在一年级、二年级所学的知识，在大三年级时就全部过时。技术的发展正快速更迭着人类维持生产力增长所需的能力，而现有教育体系已经无法满足这些需求。我们希望在这个全新的时代中，对未来的教育进行探索，以新的内容，新的形式，为体制教育做一些新的补充。
        </div>
        <div class="serve--point__section">
          <ul class="serve--point__list">
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_1.png" alt="公开课" />
              <p class="serve--point__title">IT公开课</p>
              <p class="serve--point__desc">每周一节公开课</p>
            </li>
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_2.png" alt="编程比赛">
              <p class="serve--point__title">编程比赛</p>
              <p class="serve--point__desc">系统学习，成果输出</p>
            </li>
            <li class="serve--point__item">
              <img class="serve--point__img" src="@/assets/images/serve/point_3.png" alt="职业规划">
              <p class="serve--point__title">职业规划</p>
              <p class="serve--point__desc">来自职场的一手资料</p>
            </li>
          </ul>
        </div>
        <div class="serve--demo__section">
          <div class="serve--demo__list">
            <div class="serve--demo__item">
              <img class="serve--demo__img" src="@/assets/images/serve/demo_6.jpeg" alt="清华大学编程马拉松">
              <div class="serve--demo__content">
                <div class="serve--demo__title">清华大学编程马拉松</div>
                <div class="serve--demo__desc">一次基于敏捷开发理论的 36 小时编程马拉松活动。在活动中，参赛者通过企业真实的开发场景，实现快速学习，以紧密合作的形式去头脑风暴，产出产品创意和进行项目开发。</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img class="serve--demo__img" src="@/assets/images/serve/demo_5.jpeg" alt="华商学院编程马拉松">
              <div class="serve--demo__content">
                <div class="serve--demo__title">华商学院编程马拉松</div>
                <div class="serve--demo__desc">华商学院编程马拉松，为期一个月的培训，从零基础学习小程序。800 + 参与，线上学习、线下辅导、编程精神。本地第一次编程开发马拉松，希望在增城，更多人能体验到编程的乐趣。</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img class="serve--demo__img" src="@/assets/images/serve/demo_7.jpeg" alt="银联编程马拉松" >
              <div class="serve--demo__content">
                <div class="serve--demo__title">银联编程马拉松</div>
                <div class="serve--demo__desc">有什么比一屋子程序员一起敲代码更开心的事情？编程马拉松，就给程序员们创造了一个高效编程，专注开发核心架构、尽情释放天性的机会。此时此刻，一大波程序员正在堪称本年度技术导师阵容最强大的Hackathon上忘我的敲着代码。</div>
              </div>
            </div>
            <div class="serve--demo__item">
              <img class="serve--demo__img" src="@/assets/images/serve/demo_8.jpeg" alt="校园项目实训">
              <div class="serve--demo__content">
                <div class="serve--demo__title">校园项目实训</div>
                <div class="serve--demo__desc">把职业项目带进校园，职业技能在校实训进行中 ～</div>
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
import BannerImage from '@/assets/images/common/banner/hero-banner-3.jpg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '院校合作',
        description: '实现教育民主化，将稀缺、前沿的科技教育，带到每一个人身旁。',
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
      width: 320px;
      margin-right: 20px;
      height: 200px;
      background: #f1f1f1;
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
      text-align: justify;
    }
  }
</style>
