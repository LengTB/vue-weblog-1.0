<template>
  <div class="main">
    <ContextTop :list="list" @chlickItem="chlickItem"></ContextTop>
    <v-md-editor
      v-model="text"
      height="94vh"
      toc-nav-position-right
      :include-level="[1, 2, 3, 4]"
    ></v-md-editor>

    <div class="publish" v-show="publish">
      <div>
        <el-form :model="form" ref="form" label-width="80px">
          <el-form-item label="文章标题">
            <el-input v-model="form.title"></el-input>
          </el-form-item>
          <el-form-item label="文章摘要">
            <el-input v-model="form.summary"></el-input>
          </el-form-item>
          <el-form-item label="文章标签">
            <el-input v-model="form.tags"></el-input>
          </el-form-item>
          <el-form-item label="文章路由名称">
            <el-input v-model="form.routerName"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm">发布</el-button>
            <el-button @click="publish = !publish">关闭</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import ContextTop from "@/components/console/top.vue";
export default {
  name: "ContextNew",
  data() {
    return {
      list: [
        {
          name: "预览",
        },
        {
          name: "保存",
        },
        {
          name: "发布",
          icon: require("@/assets/console/plus-circle.svg"),
        },
      ],
      text: "# Cold的窝开发中……",
      publish: false,
      form: {
        title: "",
        summary: "",
        tags: "",
        routerName: "",
      },
    };
  },
  methods: {
    //写top的点击事件的逻辑
    chlickItem(index) {
      switch (index) {
        case 1:
          this.$message.info("功能尚未开发完成，敬请期待");
          break;
        case 2:
          this.$message.info("功能尚未开发完成，敬请期待");
          break;
        case 3:
          this.publish = true;
          break;
      }
    },
    //发布
    submitForm() {
      this.$refs.form.validate((valid) => {
        if (valid) {
          // 在这里添加发布文章的逻辑，例如发送请求到服务器进行保存等操作。

          /**
           * 这里老是不能被代理，可能是因为属于element-ui组件内
           */
          this.$axios
            .post(
              "/console/article",
              {
                title: this.form.title,
                summary: this.form.summary,
                tags: this.form.tags,
                routerName: this.form.routerName,
                publishTime: this.form.publishTime,
                body: this.text,
              },
              {
                headers: {
                  token: this.$store.state.token,
                },
              }
            )
            .then((res) => {
              if (res.data.code === 1) {
                this.$message.success("发布成功");
                this.publish = false;
              }else{
                this.$message.error(res.data.message)
              }
            })
            .catch((res) => {
              this.$message.error(res.data.message);
            });
        } else {
          console.log("Validation Failed!");
          return false;
        }
      });
    },
  },
  components: {
    ContextTop,
  },
  created() {
    //验证登录
    this.$axios
      .get("/console/login", {
        headers: {
          token: this.$store.state.token,
        },
      })
      .then((ref) => {
        if (ref.data.code == 1) {
          this.$store.commit("setLogin", false);
        }else{
          this.$notify.info({
          title: "未登录",
          message: "点击右上角登录",
        });
        this.$router.push("/login");
        }
      })
      .catch(() => {
        //未登录
        this.$notify.info({
          title: "未登录",
          message: "点击右上角登录",
        });
        this.$router.push("/login");
      });
  },
};
</script>

<style lang="less" scoped>
.main {
  .publish {
    width: 100%;
    height: 100%;
    background: #c2c2c2af;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    > div {
      background-color: rgb(255, 255, 255);
      box-shadow: #9e9e9eaf 0px 0px 10px 0px;
      padding: 130px;
      width: 500px;
      margin: auto;
    }
  }
}
</style>