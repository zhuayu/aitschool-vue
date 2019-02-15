<template>
  <div class="serve--demo__section">
    <div class="serve--demo__list">
      <div class="serve--demo__item" v-for="(data, index) in demos" :key="index">
        <div class="serve--demo__img" :style="{width: imageWidth}">
          <img :src="data.image" :alt="data.title">
        </div>
        <div class="serve--demo__content">
          <div class="serve--demo__title">{{data.title}}</div>
          <div class="serve--demo__desc">{{data.description}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Point',
  props: {
    demos: {
      type: Array,
      default: ()=> {
        return []
      },
    },
    imageWidth: {
      type: String,
      default: '320px'
    }
  }
}
</script>

<style lang="less" scoped>
.serve--demo__section{
  background: #fff;
  padding: 40px;
  .serve--demo__item{
    display: flex;
    margin-bottom: 20px;
    &:last-child{
      margin-bottom: 0;
    }
  }

  .serve--demo__img{
    width: 320px;
    margin-right: 20px;

    img{
      display: block;
      max-width: 100%;
    }
  }

  .serve--demo__content{
    flex: 1;
  }
  
  .serve--demo__title{
    position: relative;
    font-size: 16px;
    color: #333;
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
  .serve--demo__desc{
    color: #666;
    font-size: 14px;
    text-align: justify;
  }
}
</style>
