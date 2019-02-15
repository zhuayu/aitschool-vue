<template>
  <div class="serve--summary__section">
    <div class="serve--summary__title">{{title}}</div>
    <div class="serve--summary__desc">{{description}}</div>
  </div>
</template>

<script>

export default {
  name: 'Summary',
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
.serve--summary__section{
  background: #fff;
  padding: 40px;

  .serve--summary__title{
    position: relative;
    font-size: 18px;
    color: #0089de;
    margin-bottom: 20px;
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

  .serve--summary__desc{
    font-size: 14px;
    color: #666;
  }
}
</style>
