<template>
  <div class="page--header">
    <div class="page--header__cell w1000">
      <div class="page--header__hd">
        <router-link :to="{ name:'Home'}">
          <img class="page--header__logo" src="~@/assets/images/common/aitschool_logo.png" alt="aitschool" />
        </router-link>
      </div>
      <div class="page--header__bd"></div>
      <div class="page--header__ft">
        <img class="page--header__avatar" :src="userInfo.github_avatar_url" alt="avatar" />
      </div>
    </div>
  </div>
</template>

<script>
import avatar from '@/assets/images/common/default_avatar.jpg';
import Service from '@/global/service/index.js';

export default {
  name: 'Header',
  data () {
    return {
      userInfo: {
        github_avatar_url: avatar
      }
    }
  },
  created() {
    Service.user.getUserInfo().then( userInfo => {
      this.userInfo = userInfo
    })
  },
  components: {

  }
}
</script>

<style lang="less">
  .page--header{
    position: relative;
    overflow: hidden;
    background: #fff;
    height: 50px;
    box-shadow: 0 1px 3px rgba(26,26,26,.1);

    .page--header__cell{
      display: flex;
      height: 100%;
    }

    .page--header__logo{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 110px;
      height: 20px;
    }

    .page--header__avatar{
      position: relative;
      top: 50%;
      transform: translateY(-50%);
      display: inline-block;
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }

    .page--header__hd{
      margin-left: 10px;
    }

    .page--header__bd{
      flex: 1;
    }

    .page--header__ft{
      margin-right: 10px;
    }

  }
</style>