<template>
  <div class="course--section">
    <router-link class="course--item" :to="{ name:'Course',params: { id: 2}}">
      <div class="course--item__top">
        <div class="course--item__title">HTML</div>
        <div class="course--item__subtitle">-- HTML基础</div>
        <div class="course--item__desc">HTML 全称超文本标记语言，它是网页构成的基础，我们见过的网页都离不开 HTML 代码。本课程从HTML代码的结构写法入手，了解常见的HMTL标签和属性，了及各类HTML标签的用法。通过案例结合，达到学以致用。</div>
      </div>
      <div class="course--item__bottom">
        <div class="course--item__content">
          <div>先修：零基础</div>
          <div>从零掌握网站开发基础</div>
        </div>
        <span class="course--item__btn">了解课程</span>
      </div>
    </router-link>
    <router-link class="course--item" :to="{ name:'Course',params: { id: 3}}">
      <div class="course--item__top" style="background-color: rgba(169,81,237,.7)">
        <div class="course--item__title">CSS</div>
        <div class="course--item__subtitle">-- 层叠样式表</div>
        <div class="course--item__desc">CSS 全称为层叠样式表，用于定义网页的展现形式。本课程主要学习通过 CSS 代码修改网页中的文本、背景、排版布局等，大家可以根据自己的需求设置不同的样式风格。最后通过实例加深理解，快速掌握并应用在开发中。</div>
      </div>
      <div class="course--item__bottom">
        <div class="course--item__content">
          <div>先修：HTML</div>
          <div>打造惊艳的用户体验</div>
        </div>
        <span class="course--item__btn" style="background-color: #a151ed">了解课程</span>
      </div>
    </router-link>
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
  .course--section{
    margin-top: 10px;
    // background-color: #fff;
    .course--item{
      display: inline-block;
      width: 365px;
      background-color: #fff;
      margin-right: 10px;
      transition: all .2s linear;
      background: url(~@/assets/images/home/course-cards.jpg) no-repeat center;
      // background-size: cover;
      color: #fff;
      cursor: pointer;

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
          font-size: 12px;
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
        .course--item__btn{
          display: inline-block;
          width: 144px;
          height: 48px;
          line-height: 48px;
          font-size: 16px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #fff;
          background: #02b3e4;
          text-align: center;
          border-radius: 2px;
        }
      }

      // box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      &:hover{
        transform: translateY(-3px);
        // box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
        box-shadow: 2px 4px 8px 0 rgba(46,61,73,.2);
      }

      &:nth-child(2n){
        margin-right: 0;
      }

      &:nth-child(n+3){
        margin-top: 10px;
      }

    }
  }
</style>
