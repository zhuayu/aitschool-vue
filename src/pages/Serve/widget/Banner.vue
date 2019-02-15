<template>
  <div class="serve--banner__section" :style="{ 'background-image': 'url('+ backgroundImage + ')'}">
    <div class="serve--banner__title">{{title}}</div>
    <div class="serve--banner__desc">{{description}}</div>
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
    height: 280px;
    padding: 40px;
    padding-left: 40px;
    padding-top: 160px;
    background: #107a9e;
    background-size: cover;
    color: #fff;
    .serve--banner__title{
      font-size: 32px;
      margin-bottom: 10px;
      opacity: .6;

    }
    .serve--banner__desc{
      font-size: 14px;
      opacity: .8;
    }
  }
</style>
