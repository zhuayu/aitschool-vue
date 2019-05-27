<template>
  <div class="serve--banner__section">
    <div class="banner-container">
      <div class="banner-content">
        <div class="banner-content__title">{{title}}</div>
        <div class="banner-content__desc">{{description}}</div>
      </div>
      <div class="banner-image">
        <img class="banner-image-img" :src="backgroundImage">
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Banner',
  props: {
    title: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    backgroundImage: null,
  }
}
</script>

<style lang="less" scoped>
  .serve--banner__section{
    box-sizing: border-box;
    background: #fff;
    // background-image: url('~@/assets/images/banner/banner-wave.svg');
    background-repeat: no-repeat;
    background-position: top left;

    .banner-container{
      width: 1000px;
      height: 100%;
      margin: 0 auto;
      padding: 40px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .banner-content{
      width: 560px; 
    }
    .banner-content__title{
      font-size: 46px;
      line-height: 40px;
      margin-bottom: 30px;
      color: #2e2f55;

    }
    .banner-content__desc{
      font-size: 20px;
      opacity: .8;
      color: #666;
      line-height: 34px;
      font-weight: 400;
      padding-top: 10px;
      text-align: justify;
    }

    .banner-image-img{
      width: 400px;
    }
  }
</style>
