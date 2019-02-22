<template>
  <div :class="['course--item', shadow ? 'box-shadow' : '']">
    <div class="course--item__top">
      <div class="course--item__title">{{course.name}}</div>
      <div class="course--item__subtitle">-- {{course.short_name}}</div>
      <div class="course--item__desc">{{course.description}}</div>
    </div>
    <div class="course--item__bottom">
      <div class="course--item__content">
        <div>优惠价格：<span class="course--item__price">{{course.price ? '¥ ' + course.price : '限时免费'}}</span></div>
        <div>学习时长：{{course.duration}} /分钟</div>
      </div>
      <span v-if="btnText" class="course--item__btn" @click="Click">{{btnText}}</span>
    </div>
  </div>
</template>

<script>


export default {
  data() {
    return {

    }
  },
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      }
    },
    btnText: {
      type: String,
      default: '课程详情'
    },
    shadow: {
      type: Boolean,
      default: true
    }
  },
  methods: {
    Click () {
      this.$emit('click-btn');
    }
  }
}
</script>

<style lang="less" scoped>
  .course--item{
    background-color: #fff;
    transition: all .2s linear;
    background: url(~@/assets/images/home/course-cards.jpg) no-repeat center;
    background-size: cover;
    color: #fff;

    .course--item__top{
      padding: 20px;
      background-color: rgba(2,179,228,.7);

      .course--item__title{
        font-size: 28px;
        line-height: 36px;
        height: 36px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      .course--item__subtitle{
        font-size: 16px;
      }

      .course--item__desc{
        margin-top: 10px;
        font-size: 14px;
        line-height: 28px;
        height: 56px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
      }
    }
    .course--item__bottom{
      padding: 20px;
      background-color: #fafbfc;
      display: flex;
      .course--item__content{
        flex: 1;
        font-size: 14px;
        line-height: 24px;
        color: #7d97ad;
      }
      .course--item__price{
        color: #ff5c00;
      }
      .course--item__btn{
        padding-top: 24px;
        font-size: 14px;
        line-height: 24px;
        color: #ff5c00;
        cursor: pointer;
      }
    }

    &.box-shadow{
      &:hover{
        transform: translateY(-3px);
        // box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }
    }
    // box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
  }
</style>
