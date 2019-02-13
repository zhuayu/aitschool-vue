<template>
  <div class="banner--section">
    <div class="banner--content">
      <div class="banner--content__tips">限时免费</div>
      <div class="banner--content__title">编程学习冷启动课程</div>
      <div class="banner--content__desc">软件安装、预备知识</div>
      <router-link :to="{ name:'Course',params: { id: 11}}" class="banner--content__btn">马上试学</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  components: {

  }
}
</script>

<style lang="less" scoped>
  .banner--section{
    height: 280px;
    background: #107a9e url(~@/assets/images/home/banner_20190210.jpg) center;
    background-size: cover;

    .banner--content{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      text-align: center;
      color: #fff;

      .banner--content__tips{
        font-size: 12px;
        letter-spacing: 2px;
        font-weight: 600;
        margin-bottom: 12px;
      }

      .banner--content__title{
        font-size: 32px;
        margin-bottom: 12px;
        font-weight: 300;
      }

      .banner--content__desc{
        margin-bottom: 24px;
        font-size: 14px;
      }

      .banner--content__btn{
        display: inline-block;
        text-align: center;
        cursor: pointer;
        width: 200px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        font-weight: 600;
        color: #02b3e4;
        background: #fff;
        transition: all .2s ease;
        &:hover{
          color: #fff;
          background: #02b3e4;
        }
      }
    }

  }
</style>
