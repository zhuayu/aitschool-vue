<template>
  <div class="video-section" v-if="url">
    <div :class="['video-ref-container', show ? 'show-video' : 'hide-video']" v-if="show">
      <video-player  class="vjs-custom-skin vjs-big-play-centered"
        ref="videoPlayer"
        :options="playerOptions"
        :playsinline="true"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
        @ended="onPlayerEnded($event)"
        @loadeddata="onPlayerLoadeddata($event)"
        @waiting="onPlayerWaiting($event)"
        @playing="onPlayerPlaying($event)"
        @timeupdate="onPlayerTimeupdate($event)"
        @canplay="onPlayerCanplay($event)"
        @canplaythrough="onPlayerCanplaythrough($event)"
        @ready="playerReadied"
        @statechanged="playerStateChanged($event)"></video-player>
    </div>
    <div class="video-tips" @click="toggleVideo">
      <span class="video-tips-text">{{ !show ? '参考视频 📺' : '参考视频  📺 '}}</span>
    </div>
  </div>
</template>

<script>
import 'video.js/dist/video-js.css'
import { videoPlayer } from 'vue-video-player'

export default {
  name: 'Video',
  props: {
    url: null,
  },
  data () {
    return {
      show: true,
      playerOptions: {
        height: '422',
        width: '750',
        autoplay: false,
        muted: false,
        language: 'en',
        playbackRates: [0.7, 1.0, 1.5, 2.0],
        // sources: [{
        //   type: "video/mp4",
        //   // src: "http://p6y9pli1g.bkt.clouddn.com/section/2018/0929/ijcUzlheG28l12o3F8lQHVz9w9Ra8IpDy27TrKzA.mp4",
        // }],
        // poster: "https://www.youked.com/assets/pages/guide/images/press_video_poster.jpg",

      }
    }
  },
  updated() {
    this.setUrl();
  },
  mounted() {
    this.setUrl();
    // console.log('this is current player instance object', this.player)
    // setTimeout(() => {
    //   console.log('dynamic change options', this.player)
    //   this.player.muted(false)
    // }, 5000)
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player
    }
  },
  methods: {
    setUrl () {
      if(this.url && this.$refs.videoPlayer){
        let url = this.url + '?timestamp=' + Date.now();
        this.player.src(url)
      }
    },
    toggleVideo() {
      // this.show = !this.show;
    },
    // listen event
    // eslint-disable-next-line
    onPlayerPlay(player) {
      // console.log('player play!', player)
    },
    // eslint-disable-next-line
    onPlayerPause(player) {
      // console.log('player pause!', player)
    },
    // eslint-disable-next-line
    onPlayerEnded(player) {
      // console.log('player ended!', player)
    },
    // eslint-disable-next-line
    onPlayerLoadeddata(player) {
      // console.log('player Loadeddata!', player)
    },
    // eslint-disable-next-line
    onPlayerWaiting(player) {
      // console.log('player Waiting!', player)
    },
    // eslint-disable-next-line
    onPlayerPlaying(player) {
      // console.log('player Playing!', player)
    },
    // eslint-disable-next-line
    onPlayerTimeupdate(player) {
      // console.log('player Timeupdate!', player.currentTime())
    },
    // eslint-disable-next-line
    onPlayerCanplay(player) {
      // console.log('player Canplay!', player)
    },
    // eslint-disable-next-line
    onPlayerCanplaythrough(player) {
      // console.log('player Canplaythrough!', player)
    },
    // or listen state event
    // eslint-disable-next-line
    playerStateChanged(playerCurrentState) {
      // console.log('player current update state', playerCurrentState)
    },
    // player is ready
    // eslint-disable-next-line
    playerReadied(player) {
      // seek to 10s
      // console.log('example player 1 readied', player)
      // player.currentTime(10)
      // console.log('example 01: the player is readied', player)
    }
  },
  components:{
    videoPlayer
  }
}
</script>

<style scoped lang="less">
.video-section{
  transition: all .2s ease;
  box-shadow: 5px 5px 25px 0 rgba(46, 61, 73, 0.2);
  overflow: hidden;

  .video-tips{
    background-color: #e7ecf3;
    padding: 16px 20px;
    border-radius: 2px;
    color: #486491;
    position: relative;

    .video-tips-text{
      color: #486491;
      position: relative;
      padding-left: 36px;

      &:before{
        content: '';
        position: absolute;
        display: block;
        width: 30px;
        height: 30px;
        top: -5px;
        left: -4px;
        border-radius: 50%;
        background-color: #73abfe;
      }

      &:after{
        content: '';
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        top: 5px;
        left: 8px;
        border-top: 5px solid transparent;
        border-bottom: 5px solid transparent;
        border-left: 8px solid #fff;
      }
    }
  }
}
</style>
