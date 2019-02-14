<template>
<div class="login--page">
  <div class="login--page__container w1000">
    <Loading :loading="loading">
      <p class="login--loading__tips">登录中，请稍后 ～</p>
    </Loading>
    <More/>
  </div>
</div>

</template>

<script>
import Service from '@/global/service/index.js';
import Loading from '@/components/Loading/Circle.vue';
import More from '@/components/More/More.vue';

export default {
  name: 'LoginCallbackGithub',
  created () {
    let code  = this.$route.query.code;
    if(!code){
      this.$router.push({ name: 'Home' });
      return
    }
    
    Service.user.login(code).then(()=>{
      // this.$router.push({ name: 'Home' });
      window.location.href = '/';
    })
  },
  data () {
    return {
      loading: true
    }
  },
  components: {
    Loading,
    More
  }
}
</script>

<style scoped lang="less">
  .login--loading__tips{
    text-align: center;
    padding-top: 150px;
    color: #666;
  }
</style>
