<template>
  <div id="app" class="page--layout">
    <Header/>
    <router-view class="page--body"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/TheHeader.vue';
import Footer from '@/components/TheFooter.vue';

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style>
html,body{
  height: 100%;
  min-width: 1000px;
}
.page--layout{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
}
.page--body{
  flex: 1;
  background: #f1f1f1;
  /*background-image: linear-gradient(to bottom right, #f7f7f7, #eafbff);*/
}

.router-link-exact-active{
  color: #2687d7;
}
</style>
