<template>
  <div class="aside--container">
    <div class="aside--tdk__container">
      <div class="aside--tdk__title">未来学院 · 互联网新大学</div>
      <div class="aside--tdk__desc">一个帮助你职业成长的社区</div>
      <div class="aside--tdk__keywords">产品 &  设计 & 研发 - aitschool</div>
    </div>
    <div class="aside--recommend__container">
      <div class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/common/recommend/recommend_1.png" alt="院校合作" />
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">院校合作</div>
          <div class="aside--recommend__desc">将优质、前沿的内容，<br/>带到每一个人身边。</div>
        </div>
      </div>
      <div class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/common/recommend/recommend_2.png" alt="企业服务" />
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">企业服务</div>
          <div class="aside--recommend__desc">免费技术支持，<br/>助力企业发展。</div>
        </div>
      </div>
      <div class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/common/recommend/recommend_3.png" alt="职业转型"/>
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">职业转型</div>
          <div class="aside--recommend__desc">每个人都可以通过努力，<br/>决定你自己生活的样子。</div>
        </div>
      </div>
    </div>
    <div class="side--gg__container">
      <a href="http://www.topproio.com/" target="_blank">
        <img class="side--gg__img" src="~@/assets/images/common/toppro_gg.jpeg" />
      </a>
    </div>
    <div class="side--about__container">
      <router-link :to="{ name:'Blog',params: { id: 1}}">关于我们 >></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Aside',
  components: {

  }
}
</script>

<style lang="less" scoped>
  .aside--container{
    width: 240px;
    margin-left: 10px;

    .aside--tdk__container{
      padding: 15px;
      background-color: #fff;
      margin-bottom: 10px;
      letter-spacing: .5px;
      .aside--tdk__title{
        font-size: 16px;
        color: #333;
        font-weight: 600;
        margin-bottom: 6px;
      }
      .aside--tdk__desc{
        font-size: 14px;
        color: #333;
        margin-bottom: 4px;
      }
      .aside--tdk__keywords{
        font-size: 12px;
        color: #999;
        line-height: 20px;
      }
      
    }

    .aside--recommend__item{
      padding: 15px;
      background-color: #fff;
      border-bottom: 1px solid #e4e4e4;
      &:last-child{
        border-bottom: none;
      }
      .aside--recommend__image{
        display: inline-block;
        width: 54px;
        height: 54px;
        margin-right: 15px;
        border-radius: 4px;
      }
      .aside--recommend__title{
        font-size: 14px;
        color: #0089de;
        line-height: 18px;
        font-weight: 500;
      }

      .aside--recommend__desc{
        font-size: 12px;
        color: #666;
        line-height: 17px;
      }
    }

    .side--gg__container{
      margin-top: 10px;

      .side--gg__img{
        display: block;
        max-width: 100%;
        height: 110px;
      }

    }

    .side--about__container{
      margin-top: 10px;
      font-size: 12px;
      color: #999;
      text-align: right;
      padding-right: 4px;
    }
  }
</style>
