<template>
  <div class="contact-section">
    <div class="contact-container">
      <div class="contact-title">{{title}}</div>
      <div class="contact-description">{{description}}</div>
      <a class="contact-btn" href="javascript:;" target="blank">13502222677</a>
    </div>
  </div>
</template>

<script type="text/javascript">
  export default {
    props: {
      title: {
        type: String,
        default: '',
      },
      description: {
        type: String,
        default: '',
      },
    }
  }
</script>

<style type="text/css" lang="less" scoped>
  .contact-section {
    background-image: url(~@/assets/images/banner/corperate-background.svg);
    background-repeat: no-repeat;
    background-size: cover;
    padding: 45px 0;
    text-align: center;
    .contact-container{
      width: 1000px;
      margin: 0 auto;

      .contact-title {
        font-size: 32px;
        line-height: 45px;
        color: #fff;
        height: 45px;
        margin-bottom: 7px;
      }

      .contact-description {
        font-size: 16px;
        color: #fff;
        font-weight: 300;
        line-height: 22px;
        height: 22px;
        margin-bottom: 24px;
      }

      .contact-btn {
        display: inline-block;
        min-width: 183px;
        height: 54px;
        padding: 0 20px;
        background: #fff;
        color: #394bcd;
        text-decoration: none;
        font-size: 24px;
        border-radius: 8px;
        line-height: 54px;
        cursor: pointer;
        &:hover{
          opacity: .8;
        }
      }
    }
  }
</style>