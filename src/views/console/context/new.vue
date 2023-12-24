<template>
  <div class="main">
    <el-button type="primary" @click="saveText">上传<i class="el-icon-upload el-icon--right"></i></el-button>
    <v-md-editor v-model="text" height="94vh" toc-nav-position-right :include-level="[1, 2, 3, 4]"></v-md-editor>
  </div>
</template>

<script>
export default {
    name: "ContextNew",
    data(){
        return{
            text:"# Cold的窝开发中……"
        } 
    },
    methods:{
      saveText(){
        console.log(this.text);
      }
    }
}
</script>

<style lang="less" scoped>

</style>