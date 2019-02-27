<template>
  <div class="aside--container">
    <div class="aside--tdk__container">
      <div class="aside--tdk__title">未来学堂 · 互联网新大学</div>
      <div class="aside--tdk__desc">一个帮助你职业成长的社区</div>
      <div class="aside--tdk__keywords">产品 &  设计 & 研发 - aitschool</div>
    </div>
    <div class="aside--recommend__container">
      <router-link :to="{ name:'ServeSchool'}" class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/icon/aside_icon_video.png" alt="校园公开课" />
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">院校合作</div>
          <div class="aside--recommend__desc">将优质、前沿的内容，<br/>带到每一个人身边。</div>
        </div>
      </router-link>
      <router-link :to="{ name:'ServeCompany'}" class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/icon/aside_icon_company.png" alt="企业服务" />
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">企业服务</div>
          <div class="aside--recommend__desc">免费提供信息技术支持，<br/>助力本地企业发展。</div>
        </div>
      </router-link>
      <router-link :to="{ name:'ServeZhiye'}" class="aside--recommend__item flex-box">
        <div class="flex-box-ft">
          <img class="aside--recommend__image" src="~@/assets/images/icon/aside_icon_study.png" alt="职业转型"/>
        </div>
        <div class="flex-box-bd">
          <div class="aside--recommend__title">职业转型</div>
          <div class="aside--recommend__desc">每个人都可以通过努力，<br/>决定自己生活的样子。</div>
        </div>
      </router-link>
    </div>
    <div class="side--gg__container">
      <a href="http://www.topproio.com/" target="_blank">
        <img class="side--gg__img" src="~@/assets/images/common/toppro_gg.jpeg" />
        <span class="side--gg__tag">工作推荐</span>
      </a>
    </div>
    <div class="side--about__container">
      <router-link :to="{ name:'Blog',params: { id: 1}}">关于我们 >></router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TheAside',
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
      &:hover{
        .aside--recommend__title{
          font-weight: 600;
          font-size: 16px;
        }
        .aside--recommend__image{
          box-shadow: 5px 5px 25px 0px rgba(46, 61, 73, 0.2);
        }
      }
      .aside--recommend__image{
        display: block;
        width: 48px;
        height: 48px;
        margin-right: 15px;
        border-radius: 50%;
        border: 1px solid #e4e4e4;
        transition: all 2s ease;
        // box-shadow: 2px 2px 15px 0px rgba(46, 61, 73, 0.2);
      }
      .aside--recommend__title{
        font-size: 14px;
        color: #0089de;
        line-height: 18px;
        font-weight: 500;
        margin-bottom: 5px;
        transition: all .2s ease;
      }

      .aside--recommend__desc{
        font-size: 12px;
        color: #666;
        line-height: 18px;
      }
    }

    .side--gg__container{
      position: relative;
      margin-top: 10px;
      overflow: hidden;

      .side--gg__img{
        display: block;
        max-width: 100%;
        height: 110px;
        transition: all .4s ease;
        &:hover{
          transform: scale(1.1);
        }
      }

      .side--gg__tag{
        display: inline-block;
        font-size: 12px;
        line-height: 16px;
        padding: 0 4px;
        background-color: #ffc706;
        color: #fff;
        position:absolute;
        top: 0;
        right: 0;
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
