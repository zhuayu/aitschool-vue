<template>
  <div class="plan--section">
    <router-link class="plan-item" :to="{ name:'Plan',params: { id: 1}}">
      <img class="plan-item-image" src="~@/assets/images/common/plan/web.png"  alt="Web前端工程师"/>
      <div class="plan-item-name">Web前端工程师课程</div>
      <span class="plan-item-tag active">立即学习</span>
    </router-link>
    <div class="plan-item">
      <img class="plan-item-image" src="~@/assets/images/common/plan/php.png"  alt="PHP工程师"/>
      <div class="plan-item-name">PHP工程师课程</div>
      <span class="plan-item-tag">敬请期待</span>
    </div>
    <div class="plan-item">
      <img class="plan-item-image" src="~@/assets/images/common/plan/python.png"  alt="Python工程师"/>
      <div class="plan-item-name">Python工程师课程</div>
      <span class="plan-item-tag">敬请期待</span>
    </div>
    <router-link class="plan-item" :to="{ name:'Plan',params: { id: 3}}">
      <img class="plan-item-image" src="~@/assets/images/common/plan/wechat.png"  alt="微信小程序工程师"/>
      <div class="plan-item-name">微信小程序工程师课程</div>
      <span class="plan-item-tag active">立即学习</span>
    </router-link>
    <div class="plan-item">
      <img class="plan-item-image" src="~@/assets/images/common/plan/ios.png"  alt="iOS工程师"/>
      <div class="plan-item-name">iOS工程师课程</div>
      <span class="plan-item-tag">敬请期待</span>
    </div>
    <div class="plan-item">
      <img class="plan-item-image" src="~@/assets/images/common/plan/android.png"  alt="Android工程师"/>
      <div class="plan-item-name">Android工程师课程</div>
      <span class="plan-item-tag">敬请期待</span>
    </div>
  </div>
</template>

<script>


export default {
  name: 'Plan',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  .plan--section{
    margin-top: 10px;
    // background-color: #fff;
    .plan-item{
      position: relative;
      display: inline-block;
      width: 220px;
      background-color: #fff;
      margin-right: 10px;
      text-align: center;
      padding: 10px;
      transition: all .2s linear;
      cursor: pointer;
      // box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      &:hover{
        transform: translateY(-3px);
        // box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }

      &:nth-child(3n){
        margin-right: 0;
      }

      &:nth-child(n+4){
        margin-top: 10px;
      }

      .plan-item-image{
        display: block;
        width: 180px;
        height: 108px;
        margin: 0 auto;
        background-color: #f5f5f5;
      }

      .plan-item-name{
        margin-top: 10px;
        font-size: 14px;
        color: #666;
      }

      .plan-item-tag{
        position: absolute;
        top: 6px;
        right: 6px;
        display: inline-block;
        line-height: 18px;
        padding: 0 4px;
        background-color: #f5f5f5;
        color: #666;
        font-size: 12px;
        &.active{
          background-color: #ff5483;
          color: #fff;
        }
      }
    }
  }
</style>
