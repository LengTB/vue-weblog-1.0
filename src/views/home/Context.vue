<template>
  <div class="main">
    <HomeTop></HomeTop>
    <div class="main-content">
       <v-md-editor mode="preview" v-model="text" height="94vh" toc-nav-position-right :include-level="[1, 2, 3, 4]"></v-md-editor>
    </div>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
export default {
  name: "ContextMain",
  data() {
    return {
      text: "",
    };
  },
  mounted() {
    // this.text = this.$route.query.text;
  },
  components: {
    HomeTop,
  },
};
</script>

<style lang="less" scoped>
.main {
  width: 100%;
  .main-content {
    background: #ffffff;

    //为旁边留位置
    margin: 0 300px;
  }
}
</style>