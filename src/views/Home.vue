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