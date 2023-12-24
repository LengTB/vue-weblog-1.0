<template>
  <div class="home">
    <HomeTop :index="index" @change="chageIndex"></HomeTop>
    <HomeImage></HomeImage>
    <div class="body">
      <div class="left">
        <HomeContext
          ref="contest"
          :bodys="bodys"
          @handleCurrentChange="getIndex"
        ></HomeContext>
      </div>
      <div class="right">
        <HomeCard :context="context" ref="Card"></HomeCard>
      </div>
    </div>
    <el-backtop>
      <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="25" height="25">
    <path d="M725.902 498.916c18.205-251.45-93.298-410.738-205.369-475.592l-6.257-3.982-6.258 3.414c-111.502 64.853-224.711 224.142-204.8 475.59-55.751 53.476-80.214 116.623-80.214 204.8v15.36l179.2-35.27c11.378 40.39 58.596 69.973 113.21 69.973 54.613 0 101.262-29.582 112.64-68.836l180.337 36.41v-15.36c-.569-89.885-25.031-153.6-82.489-206.507zM571.733 392.533c-33.564 31.29-87.04 28.445-118.329-5.12s-28.444-87.04 5.12-117.76c33.565-31.289 87.04-28.444 118.33 5.12s28.444 86.471-5.12 117.76zm-56.32 368.64c-35.84 0-64.284 29.014-64.284 64.285 0 35.84 54.044 182.613 64.284 182.613s64.285-146.773 64.285-182.613c0-35.271-29.014-64.285-64.285-64.285z"></path>
  </svg>
  </el-backtop>
    <HomeFooter></HomeFooter>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
import HomeImage from "@/components/HomeImage.vue";
import HomeFooter from "@/components/HomeFooter.vue";
import HomeContext from "@/components/HomeContext.vue";
import HomeCard from "@/components/HomeCard.vue";
export default {
  name: "ColdHome",
  data() {
    return {
      index: 0,
      context: {},
      bodys: "",
    };
  },
  components: {
    HomeTop,
    HomeImage,
    HomeFooter,
    HomeContext,
    HomeCard,
  },
  //创建时
  created() {
    //数据加载
    this.$axios
      .get(this.$store.state.domain + "/data")
      .then((ref) => {
        if (ref.data.code == 1) {
          this.context = ref.data.data;
          this.bodys = ref.data.data.bodys;
        }
      })
      .catch((err) => {
        console.log(err);
      });

    //验证登录
    this.$axios
      .get("/api/console/verify", {
        headers: {
          token: this.$store.state.token,
        },
      })
      .then((ref) => {
        if (ref.data.code == 1) {
          this.$store.commit("setLogin", false);
        }
      })
      .catch(() => {
        //未登录
        this.$notify.info({
          title: "未登录",
          message: "点击右上角登录",
          position: "bottom-right",
        });
      });
  },
  //挂载完成
  mounted() {},
  //自定义方法
  methods: {
    chageIndex(index) {
      this.index = index;
    },

    getIndex(index) {
      console.log(index);
    },
  },
  computed: {},
};
</script>

<style lang="less" scoped>
/*滚动条里面轨道*/
body::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(255, 255, 255, 0);
  background-color: rgb(20, 19, 19);
}
/*定义滚动条整体的样式*/
body::-webkit-scrollbar{
  width: 6px;
  background-color: rgb(20, 19, 19);
}
/*滚动条的样式*/
body::-webkit-scrollbar-thumb{
	height:20px;
  background-image: -webkit-gradient(linear,
  left bottom,
  left top,
  color-stop(0.2, rgb(125, 126, 128)),
  color-stop(0.4, rgb(97, 98, 99)),
  color-stop(0.8, rgb(125, 126, 128)));
}

.body {
  padding: 0;
  margin: 10px 100px 50px 100px;
  min-height: 60vh;

  display: flex;
  justify-content: space-evenly;
  // align-content: flex-start;
  .left {
    width: 80%;
    height: auto;
  }
  .right {
    height: auto;
  }
}

@media (max-width: 992px) {
  .left {
    width: 100%;
  }
  .right {
    display: none;
  }
}
</style>