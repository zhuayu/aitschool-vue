<template>
  <div class="recommend--section">
    <Recommend :recommends="recommends" />
  </div>
</template>

<script>
import Recommend from '@/components/BaseRecommend.vue';

export default {
  data() {
    return {
      recommends: [
        {
          tab: 'FM',
          list: [{
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
          }]
        },{
          tab: 'Awesome',
          list: [{
            name: '中国科学技术大学课程资源',
            link: 'https://github.com/mbinary/USTC-CS-Courses-Resource'
          },{
            name: '九部成员合著的web前端开发零基础入门手册',
            link: 'https://www.yuque.com/fe9/basic'
          },{
            name: 'PHP 优秀资源的整理',
            link: 'https://github.com/shockerli/php-awesome'
          },{
            name: 'LeetCode、HackRank、剑指 offer 等经典算法实现',
            link: 'https://github.com/apachecn/awesome-algorithm'
          },{
            name: 'Python 优秀资源的整理',
            link: 'https://github.com/vinta/awesome-python'
          },{
            name: 'os-tutorial 教你如何从零开始构建一个操作系统',
            link: 'https://github.com/cfenollosa/os-tutorial'
          }]
        }],
    }
  },
  components: {
    Recommend
  }
}
</script>

<style lang="less" scoped>
  .recommend--section{
    margin-top: 10px;
  }
</style>
