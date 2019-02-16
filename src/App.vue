<template>
  <div id="app" class="pg--layout">
    <Header/>
    <router-view class="pg--bd"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header/Header.vue';
import Footer from '@/components/Footer/Footer.vue';

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
.pg--layout{
  display: flex;
  flex-direction: column;
  min-height: 100%;
  justify-content: space-between;
}
.pg--bd{
  flex: 1;
  background: #f1f1f1;
  /*background-image: linear-gradient(to bottom right, #f7f7f7, #eafbff);*/
}
</style>
