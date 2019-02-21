<template>
  <div :class="['course--item', 
    cousrseImageConfig[course.id] 
      ? cousrseImageConfig[course.id].background 
      : cousrseImageConfig[0].background ]">
    <div class="course--item__top">
        <img class="course--item__image" :src="cousrseImageConfig[course.id] 
          ? cousrseImageConfig[course.id].image 
          : cousrseImageConfig[0].image" alt="">
        <div class="course--item__title">{{course.name}}</div>
    </div>
    <div class="course--item__bottom">
      <div class="course--item__info">
        <div class="course--item__lesson">
          <div class="course--item__number">{{course.short_name}}</div>
          <div class="course--item__duration">
            <span>{{course.duration || '-'}} 分钟</span>
            <span class="course--item__price">{{course.price ? '¥ ' + course.price : '限时免费'}}</span>
          </div>
        </div>
      </div>
      <div class="course--item__btnBox">{{course.price ? '¥ ' + course.price : '限时免费'}}</div>
    </div>
  </div>
</template>
<script>

import cousrseImageConfig from './course_image.js';

export default {
  data() {
    return {
      cousrseImageConfig,
    }
  },
  props: {
    course: {
      type: Object,
      default: () => {
        return {}
      }
    },
    subText: {
      type: String,
      default: '精选课程'
    }
  },
}
</script>

<style lang="less" scoped>
  .course--item{
    position: relative;
    display: inline-block;
    width: 240px;
    background-color: #fff;
    // border-radius: 8px;
    overflow: hidden;

    &.red{
      &:before{
        background-image: linear-gradient(180deg,#f44881,#ec454f);
      }
    }
    &.yellow{
      &:before{
        background-image: linear-gradient(0deg,#f19a1a,#ffc73c);
      }
    }
    &.blue{
      &:before{
        background-image: linear-gradient(180deg,#21c8f6,#637bff);
      }
    }
    &.green{
      &:before{
        background-image: linear-gradient(180deg,#6edcc4,#1aab8b);
      }
    }
    &.purple{
      &:before{
        background-image: linear-gradient(180deg,#8b60ed,#b372bd);
      }
    }
    &:before{
      // border-radius: 8px;
      transition: height .2s;
      position: absolute;
      top: 0;
      left: 0;
      height: 216px;
      content: "";
      width: 100%;
      background-image: linear-gradient(180deg,#f44881,#ec454f);
    }
    &:hover{
      &:before{
        height: 100%;
      }
      .course--item__bottom{
        padding-top: 0;
        top: -10px;
        .course--item__info{
          .course--item__lesson{
            width: 100%;
          }
          .course--item__number,
          .course--item__duration{
            color: #fff;
            border-color: #fff;
          }
          .course--item__price{
            visibility: hidden;
          }
        }
        .course--item__btnBox{
          opacity: 1;
        }
      }
    }
    .course--item__top{
      position: relative;
      padding: 12px 16px;
      border-radius: 4px;
      .course--item__image{
        display: block;
        width: auto;
        height: 130px;
        margin: 0 auto 10px;
      }
      .course--item__title{
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 18px;
        color: #fff;
        line-height: 25px;
        height: 50px;
        text-align: center;
        font-weight: 500;
      }
      .course--item__subTitle{
        font-size: 14px;
        color: #fff;
        line-height: 25px;
        height: 25px;
        text-align: center;
        font-weight: 500;
      }
    }
    .course--item__bottom{
      position: relative;
      padding: 20px;
      height: 80px;
      box-sizing: border-box;
      transition: all .2s ease;
      .course--item__info{

        .course--item__number{
          font-size: 14px;
          color: #666;
          line-height: 20px;
          transition: all .2s ease;
          text-overflow: ellipsis;
          height: 20px;
          overflow: hidden;
          white-space: nowrap;
        }
        .course--item__duration{
          font-size: 12px;
          color: #999;
          line-height: 20px;
          transition: all .2s ease;
        }
        .course--item__price{
          float: right;
          color: #ff5c00;
        }
      }
      .course--item__btnBox{
        margin-top: 10px;
        background: hsla(0,0%,100%,.2);
        border: 1px solid hsla(0,0%,100%,.3);
        transition: all .2s;
        line-height: 28px;
        border-radius: 30px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        opacity: 0;
        padding: 0 16px;
      }
    }
  }
</style>
