<!--
.vue 文件是 vue的开发方式，template 、script 、style三个组成了vue的一个组件

-->


<!--要显示的代码 html代码-->
<template>
  <div id="test">
    {{ text }}
  </div>

</template>

<!--js代码-->
<script>
export default {
  //data 是作为 vue组件的数据，初始化的数据，使用function的声明，在里面return内容
  data() {
    return {
      text: 'abc'
    }
  }
}
</script>


<!--
要显示的内容是什么样式，这个组件特有的样式，
-->
<style>
#test {
  color: red;
}
</style>