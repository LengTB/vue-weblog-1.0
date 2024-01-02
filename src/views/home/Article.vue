<template>
  <div class="article">
    <div v-show="!show">
      <HomeTop></HomeTop>
      <div class="body">
        <div class="title">{{ content.title }}</div>
        <div class="about"></div>
        <div class="content">
          <v-md-editor
          class="editor"
            mode="preview"
            v-model="content.body"
            toc-nav-position-right
            :include-level="[1, 2, 3, 4]"
          >
          </v-md-editor>
        </div>
      </div>
    </div>

    <HomeStop v-show="show"></HomeStop>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
import HomeStop from "@/views/other/Stop.vue";

export default {
  name: "HomeArticle",
  data() {
    return {
      show: false,
      content:{},
    };
  },
  components: {
    HomeTop,
    HomeStop,
  },
  created() {
    this.$axios
      .get("/user/article/" + this.$route.params.id, {
        headers: {
          token: this.$store.state.token,
        },
      })
      .then((res) => {
        this.$message.info("测试模式， 请求成功！");
        this.content = res.data.data;
        console.log(res);
      })
      .catch(() => {
        this.$message.error("测试模式， 请求失败！");
      });
  },
};
</script>

<style lang="less" scoped>
.article {
  width: 100%;
  height: 100%;
  .body {
    margin: 80px 20%;
    .title {
      width: 100%;
      height: 100px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 35px;
      font-family: 方正行黑简体;
      background-color: rgb(255, 255, 255);
    }
  }
}
</style>>
