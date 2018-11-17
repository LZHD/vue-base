<template>
  <div>
    <textarea id="mytextarea" title="富文本">Hello, World!</textarea>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import toolbar from './toolbar'
import plugins from './plugins'
import 'tinymce/themes/modern/index'
import '../../assets/js/tinymce/zh_CN'

export default {
  name: 'TinymceEditor',
  mounted () {
    tinymce.init({
      selector: '#mytextarea',
      height: 300,
      toolbar: toolbar,
      plugins: plugins
    })
  }
}
</script>

<style scoped lang="css">
  @import "~tinymce/skins/lightgray/skin.min.css";
  @import "~tinymce/skins/lightgray/content.min.css";
  @import "~tinymce/plugins/codesample/css/prism.css";
</style>
