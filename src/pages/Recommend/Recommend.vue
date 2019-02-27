<template>
  <div class="Recomend--page">
    <div class="Recomend--page__container w1000">
      <div class="Recomend--page__main">
        <Recommend :recommends="recommends" />
        <More/>
      </div>
      <Aside class="Recomend--page__side"/>
    </div>
  </div>
</template>

<script>
import Recommend from '@/components/BaseRecommend.vue';
import More from '@/components/BaseMoreInfo.vue';
import Aside from '@/components/TheSidebar.vue';

export default {
  name: 'RecomendPage',
  data () {
    return {
      recommends: [
        {
          tab: '电台',
          list: [{
            name: '与 Hawstein 和左程云聊算法和数据结构',
            link: 'https://castro.fm/episode/feNHQL'
          },{
            name: '与阴明和范怀宇跟大家谈谈微信小程序为什么火了',
            link: 'https://castro.fm/episode/QXFuAW'
          },{
            name: '为什么 VScode 比 Atom 快这么多 ?',
            link: 'https://castro.fm/episode/20rGdD'
          },{
            name: '与丁磊聊机器学习和数据科学',
            link: 'https://castro.fm/episode/73Wdrr'
          },{
            name: '你应该知道的 Agile 和 Scrum',
            link: 'https://castro.fm/episode/IY4MQO',
          },{
            name: 'Vue.js 框架的作者尤小右聊聊前端框架开发背后的故事',
            link: 'https://castro.fm/episode/QyGc25'
          },{
            name: '和《深入浅出Node.js》作者朴灵一起聊聊Node.js',
            link: 'https://castro.fm/episode/MVXdA3'
          },{
            name: 'Git, GitHub and GitLab',
            link: 'https://castro.fm/episode/urnALj'
          },{
            name: '和彩程设计聊聊远程工作',
            link: 'https://castro.fm/episode/ilajan'
          },{
            name: '自由的思考：远程工作者的成长之路',
            link: 'https://castro.fm/episode/nKiiWr'
          },{
            name: '和 Sting 聊聊 Full Stack developer',
            link: 'https://castro.fm/episode/ebCnc1'
          },{
            name: '硬件和选购的一些技巧',
            link: 'https://castro.fm/episode/loxa7k'
          }]
        },{
          tab: '资源',
          list: [{
            name: '中国科学技术大学课程资源',
            link: 'https://github.com/mbinary/USTC-CS-Courses-Resource'
          },{
            name: '九部成员合著的web前端开发零基础入门手册',
            link: 'https://www.yuque.com/fe9/basic'
          },{
            name: 'javascript-tutorial-en 一份开源的 JavaScript 教程，基本用法和基础使用',
            link: 'https://github.com/iliakan/javascript-tutorial-en'
          },{
            name: 'PHP 优秀资源的整理',
            link: 'https://github.com/shockerli/php-awesome'
          },{
            name: 'LeetCode、HackRank、剑指 offer 等经典算法实现',
            link: 'https://github.com/apachecn/awesome-algorithm'
          },{
            name: 'C/C++ 面试基础知识总结，送给准备换工作的开发者',
            link: 'https://github.com/huihut/interview'
          },{
            name: 'Python 优秀资源的整理',
            link: 'https://github.com/vinta/awesome-python'
          },{
            name: 'os-tutorial 教你如何从零开始构建一个操作系统',
            link: 'https://github.com/cfenollosa/os-tutorial'
          },{
            name: 'react-native-train 一本开源的 React Native 教程',
            link: 'https://github.com/unbug/react-native-train'
          },{
            name: 'homemade-machine-learning 一份十分全面的算法资源',
            link: 'https://github.com/trekhleb/homemade-machine-learning'
          },{
            name: 'Nodejs-Developer-Roadmap Node.js 开发者技术路线图',
            link: 'https://github.com/aliyr/Nodejs-Developer-Roadmap'
          },{
            name: 'architect-awesome 后端架构师技术图谱',
            link: 'https://github.com/xingshaocheng/architect-awesome'
          }]
        },{
          tab: '技能栈',
          list: [{
            name: 'Git - 分布式版本控制系统',
            link: 'https://git-scm.com/doc'
          },{
            name: 'jQuery - 高效、精简并且功能丰富的 JavaScript Web 工具库',
            link: 'https://www.jquery123.com/'
          },{
            name: 'Less - CSS 预处理语言',
            link: 'http://lesscss.cn/'
          },{
            name: 'Vue.js - 构建用户界面的渐进式框架',
            link: 'https://cn.vuejs.org/'
          },{
            name: 'React.js - 构建用户界面的 JavaScript 库',
            link: 'https://reactjs.org/'
          },{
            name: 'Egg.js - 企业级Node.js框架',
            link: 'https://eggjs.org/'
          },{
            name: 'React Native - 使用 JavaScript 构建移动端应用',
            link: 'https://facebook.github.io/react-native/'
          },{
            name: 'Flutter - 极速构建漂亮的原生应用',
            link: 'https://flutter.dev/'
          },{
            name: '微信小程序 - 可以在微信内被便捷地获取和传播的应用',
            link: 'https://developers.weixin.qq.com/miniprogram/dev/index.html'
          },{
            name: 'PWA - 渐进式网页应用',
            link: 'https://lavas.baidu.com/doc'
          },{
            name: 'Electron - 使用 JavaScript 构建跨平台的桌面应用',
            link: 'https://electronjs.org/'
          },{
            name: 'Laravel - 简洁、优雅的 PHP 开发框架',
            link: 'https://laravel.com/'
          },{
            name: 'TensorFlow - 感知和语言理解任务的机器学习开源库',
            link: 'https://tensorflow.juejin.im/get_started/'
          }]
        }],
    }
  },
  components: {
    More,
    Aside,
    Recommend
  }
}
</script>

<style lang="less" scoped>
  // @import '~@/global/style/base/fn.less';
  .Recomend--page__container{
    display: flex;
    padding: 20px;

    .Recomend--page__main{
      flex: 1;
    }

    .Recomend--page__side{
      flex: none;
      width: 240px;
      margin-left: 20px;
    }
  }
</style>
