<template>
  <div class="content-style" v-html="compiledMarkdown"></div>
</template>

<script>
import markdownIt from 'markdown-it';
import hljs from 'highlight.js';
import './hightlight.less';
import './content-style.less';
const md = markdownIt({
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return hljs.highlight(lang, str).value;
      } catch (err) {
        // console.log(err)
      }
    }
    return ''; // use external default escaping
  }
})
export default {
  name: 'Mark',
  props: {
    content: {
      type: String,
      default: ''
    },
  },
  created () {

  },
  computed:{
    compiledMarkdown: function () {
      let context = md.render(this.content);
      return context
    }
  }
}
</script>

<style scoped lang="less">

</style>
