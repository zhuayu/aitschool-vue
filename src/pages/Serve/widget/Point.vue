<template>
  <div class="serve--point__section">
    <ul class="serve--point__list">
      <li class="serve--point__item" v-for="(data, index) in points" :key="index">
        <div class="serve--point__img">
          <img :src="data.image" :alt="data.title">
        </div>
        <p class="serve--point__title">{{data.title}}</p>
        <p class="serve--point__desc">{{data.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Point',
  props: {
    points: {
      type: Array,
      default: ()=> {
        return []
      },
    }
  }
}
</script>

<style lang="less" scoped>
.serve--point__section{
  background: #fff;
  .serve--point__list{
    margin-top: 10px;
    display: flex;
    justify-content: space-around;
    align-items: flex-end;
    margin: 0;
    padding: 0;
    list-style: none;
    .serve--point__item{
      margin: 0;
      padding: 0;
      text-align: center;
      padding: 20px;

      .serve--point__img{
        position: relative;
        height: 120px;
        margin-bottom: 10px;
        img{
          position: relative;
          max-height: 120px;
          top: 50%;
          transform: translateY(-50%);
        }

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
</style>
