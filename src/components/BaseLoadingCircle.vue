<template>
  <div class="cpt--loading__container">
    <slot></slot>
    <div :class="['cpt--loading__mask', loading ? '' : 'cpt--loading__hidden']">
      <div class="cpt--loading__spinner">
        <svg viewBox="25 25 50 50" class="cpt--loading__circular">
            <circle cx="50" cy="50" r="20" fill="none" class="path"></circle>
        </svg>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {

    }
  },
  props: {
    loading: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="less" scoped>
.cpt--loading__container{
  position:relative!important;
  min-height: 512px;

  .cpt--loading__hidden{
    overflow:hidden!important;
    opacity: 0;
    height: 0;
  }

  .cpt--loading__mask{
    position:absolute;
    z-index:2000;
    background-color:rgba(255,255,255,.5);
    margin:0;top:0;right:0;bottom:0;left:0;
    -webkit-transition:opacity .3s;
    transition:opacity .3s;
  }
  .cpt--loading__spinner{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
  }
  .cpt--loading__circular{
    display: inline-block;
    height:50px;
    width:50px;
    animation: loading-rotate 2s linear infinite;
  }

  .cpt--loading__circular .path{
    animation:loading-dash 1.5s ease-in-out infinite;
    stroke-dasharray:90,150;
    stroke-dashoffset:0;
    stroke-width:2;
    stroke:#409EFF;
    stroke-linecap:round;
  }
}

@keyframes loading-rotate{
  100%{
    transform:rotate(360deg)
  }
}


@keyframes loading-dash{
  0%{
    stroke-dasharray:1,200;
    stroke-dashoffset:0
  }
  50%{
    stroke-dasharray:90,150;
    stroke-dashoffset:-40px
  }
  100%{
    stroke-dasharray:90,150;
    stroke-dashoffset:-120px
  }
}
</style>