<template>
  <div class="main">
    <v-md-editor v-model="text" height="400px"></v-md-editor>
  </div>
</template>

<script>
export default {
    name: "ContextNew",
    data(){
        return{
            text:"# Cold的窝开发中……"
        }
    }
}
</script>

<style lang="less" scoped>

</style>