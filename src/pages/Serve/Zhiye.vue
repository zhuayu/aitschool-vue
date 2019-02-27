<template>
  <div class="serve--page">
    <div class="serve--page__container w1000">
      <div class="serve--page__main">
        <Banner :title="banner.title" :description="banner.description" :background-image="banner.backgroundImage" />
        <Summary :title="summary.title" :description="summary.description" />
        <Point :points="points" />
        <Demo :demos="demos" />
      
        <More content="想进行职业转型，马上咨询：13502222677"/>
      </div>
      <Aside class="serve--page__side"/>
    </div>
  </div>
</template>

<script>
import Aside from '@/components/Aside/Aside.vue';
import More from '@/components/More/More.vue';
import Banner from './widget/Banner.vue';
import Summary from './widget/Summary.vue';
import Point from './widget/Point.vue';
import Demo from './widget/Demo.vue';

import BannerImage from '@/assets/images/common/banner/hero-banner-1.jpg';
import PointImage_1 from '@/assets/images/serve/point_4.png';
import PointImage_2 from '@/assets/images/serve/point_5.png';
import PointImage_3 from '@/assets/images/serve/point_6.png';
import demoImage_1 from '@/assets/images/serve/demo_1.jpg';
import demoImage_2 from '@/assets/images/serve/demo_2.jpg';
import demoImage_3 from '@/assets/images/serve/demo_3.jpg';
import demoImage_4 from '@/assets/images/serve/demo_4.jpg';
export default {
  name: 'serve',
  data () {
    return {
      banner: {
        title: '职业转型',
        description: '掌握互联网核心技能，抢先成为稀缺人才',
        backgroundImage: BannerImage
      },
      summary: {
        title: '新蕾计划',
        description: '新蕾计划源愿望在一年时间，为互联网培养专业的技术人员。采取录取筛选、每周考核、日日实战的模式，确保为社会输出扎实踏实的技术正规军。 1 : 1 还原真实的互联网工作环境，宽阔办公环境、舒适座椅、超快网络，以及一切项目开发你所需要的工具及专业书籍。专属的导师带入门，领取任务副本，每个任务都来自企业的真实需求。每天实战打怪升级，每个人都由自己的级别，从 1 级到 21 级。'
      },
      points: [{
        image: PointImage_1,
        title: '沉浸式学习',
        description: '1:1 还原每周 SCRUM 迭代式开发'
      },{
        image: PointImage_2,
        title: '一线工程师认证',
        description: 'BAT、滴滴、京东工程师面试'
      },{
        image: PointImage_3,
        title: '就业服务',
        description: '认证学员对接 TOPPRO'
      }],
      demos: [{
        image: demoImage_1,
        title: '前沿技术',
        description: '学 Google、Facebook、Tencent 官方教程，掌握前沿技术。我们综合业界最新技术，各个平台的优秀内容进行整合，与时俱进更新。构建最优的知识体系和图谱，为后续动手实战积累知识，做最充分的准备。'
      },{
        image: demoImage_2,
        title: '代码量级',
        description: '知识的掌握程度分为：了解、熟悉、掌握 与 精通，依靠的就是经验与总结。好记性不如烂键盘，我们相信代码是靠肌肉进行记忆的。每天的编码练习，及时发现自己的不足，对知识点进行更深入的理解。量级的代码积累，为工作和实战的必备前提。'
      },{
        image: demoImage_3,
        title: '真实项目',
        description: '通过我们构建的实战项目，从易到难，从小到大，从简单到复杂，从虚拟到真实。我们根据本地企业定制的需求进行研发，亲手挑战真实的商业项目！在真实项目中，每个人的项目都不一样，真枪实战。'
      },{
        image: demoImage_4,
        title: '职业证书',
        description: '一线的专家工程师会对你的学习结果和实战项目给以评判和指导，你将会进一步完善项目。期满毕业后，将为学员提供 BAT、京东、滴滴 承认的专业技能认证服务，并颁发有效技能证书。'
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
