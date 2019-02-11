<template>
  <div class="partner--section">
    <div class="partner--list">
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-google.svg"/>
      </div>
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-facebook.svg"/>
      </div>
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-amazon.svg"/>
      </div>
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-ibm.svg"/>
      </div>
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-github.svg"/>
      </div>
      <div class="partner--item">
        <img class="partner--item__image" src="~@/assets/images/partners/logo-gray-tencent.svg"/>
      </div>
    </div>
    <p class="partner--description">学 Google、Facebook、Tencent 官方教程，掌握前沿技术</p>
  </div>
</template>

<script>


export default {
  name: 'Partner',
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style lang="less" scoped>
  .partner--section{
    margin-top: 20px;
    padding: 40px 0;
    .partner--list{
      opacity: .7;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      border-bottom: 1px solid rgba(0,0,0,.1);
      .partner--item__image{
        // max-height: 3.75rem;
        max-height: 50px;
        margin: -7px 15px;
      }
    }
    .partner--description{
      color: #7d97ad;
      text-align: center;
    }
  }
</style>
