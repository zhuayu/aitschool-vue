
const DURATION = 2000; // 毫秒

export default {
  info (message,duration=DURATION) {
    console.log('一般信息',message)
  },
  warn (message,duration=DURATION) {
    console.log('警告信息',message)
  },
  error (message,duration=DURATION) {
    console.log('错误信息',message)
  }
}

