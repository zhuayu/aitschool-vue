<template>
  <div class="serve--page">
    <div class="serve--page__main">
      <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage"/>

      <div class="point-section">
        <h2>我们曾举办以下校园服务</h2>
        <div class="point-list">
          <div class="point-item">
            <div class="point-item-left">
              <div class="point-content">
                <div class="point-item-title">清华大学编程马拉松</div>
                <div class="point-item-desc">一次基于敏捷开发理论的 36 小时编程马拉松活动。在活动中，参赛者通过企业真实的开发场景，实现快速学习，以紧密合作的形式去头脑风暴，产出产品创意和进行项目开发。</div>
              </div>
            </div>
            <div class="point-item-right">
              <div class="point-content">
                <div class="point-item-images">
                  <img class="shadow-right" src="@/assets/images/serve/demo_6.jpeg">
                </div>
              </div>
            </div>
          </div>
          <div class="point-item">
            <div class="point-item-left">
              <div class="point-content">
                <div class="point-item-images">
                  <img class="shadow-right" src="@/assets/images/serve/demo_5.jpeg">
                </div>
              </div>
            </div>
            <div class="point-item-right">
              <div class="point-content">
                <div class="point-item-title magenta">华商学院编程马拉松</div>
                <div class="point-item-desc">华商学院编程马拉松，为期一个月的培训，从零基础学习小程序。800 + 参与，线上学习、线下辅导、编程精神。本地第一次编程开发马拉松，希望在增城，更多人能体验到编程的乐趣。</div>
              </div>
            </div>
          </div>
          <div class="point-item">
            <div class="point-item-left">
              <div class="point-content">
                <div class="point-item-title purple">银联编程马拉松</div>
                <div class="point-item-desc">有什么比一屋子程序员一起敲代码更开心的事情？编程马拉松，就给程序员们创造了一个高效编程，专注开发核心架构、尽情释放天性的机会。此时此刻，一大波程序员正在堪称本年度技术导师阵容最强大的Hackathon上忘我的敲着代码。</div>
              </div>
            </div>
            <div class="point-item-right">
              <div class="point-content">
                <div class="point-item-images">
                  <img class="shadow-right" src="@/assets/images/serve/demo_7.jpeg">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Contact title="期待与您合作" description="期待您的回电，沟通详细需求"/>
      <div class="more-section">
        <More class="w1000" content="掌握 Google、Facebook、Tencent ... 前沿技术"/>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './widget/VBanner.vue';
import Contact from './widget/VContact.vue';
import More from '@/components/BaseMoreInfo.vue';
import BannerImage from '@/assets/images/banner/banner-school.svg';

export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '校园公开课',
        description: '新的科技知识，大概每两年会增加一倍。对读大学的学生来说，很多他们在一年级、二年级所学的知识，在大三年级时就全部过时。我们希望在这个全新的时代中，以新的内容，新的形式，为教育做一些新的补充。',
        backgroundImage: BannerImage
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

    .serve--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }
  }

  .point-section{
    padding: 40px;
    background-color: #f8fafe;

    h2{
      text-align: center;
      font-size: 48px;
      font-weight: 300;
      line-height: 2;
      color: #333;
    }

    .point-list{
      width: 1000px;
      margin: 0 auto;
    }

    .point-item{
      height: 380px;
    }
    .point-item-left{
      float: left;
      height: 380px;
      width: 40%;
      text-align: left;
    }
    .point-item-right{
      float: right;
      height: 380px;
      width: 40%;
      text-align: right;
    }
    .point-content{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
    }
    .point-item-icon{
      width: 5rem;
      height: 5rem;
      border-radius: 50%;
      background-color: #fff;
      box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      text-align: center;
      margin-bottom: 1.5rem;
      img{
        max-width: 100%;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .point-item-title{
      color: #02b3e4;
      font-size: 28px;
      line-height: 2.25;
      font-weight: 400;
      margin-bottom: 12px;
      text-align: left;
      &.magenta {
        color: #ff5483;
      }

      &.purple {
        color: #a951ed;
      }
    }
    .point-item-desc{
      font-size: 14px;
      line-height: 2;
      color: #525c65;
      font-weight: 400;
      text-align: left;
    }
    .point-item-images{
      position: relative;
      width: 100%;
      display: inline-block;

      img{
        width: 100%;
      }

      .shadow-right {
        box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
      }

      .abs-right{
        position: absolute;
        top: 60%;
        right: 60%;
      }

      .abs-left{
        position: absolute;
        top: 60%;
        left: 60%;
      }

    }
  }

  .more-section{
    background-color: #fff;
    overflow: hidden;
  }

</style>
