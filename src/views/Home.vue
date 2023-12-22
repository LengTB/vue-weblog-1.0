<template>
  <div class="home">
    <HomeTop :index="index" @change="chageIndex"></HomeTop>
    <MyImageTop></MyImageTop>
    <div class="body">
      <div class="left">
        <MyContext
          ref="contest"
          :bodys="bodys"
          @handleCurrentChange="getIndex"
        ></MyContext>
      </div>
      <div class="right">
        <MyCard :context="context" ref="Card"></MyCard>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
import MyImageTop from "@/components/MyImageTop.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyContext from "@/components/MyContext.vue";
import MyCard from "@/components/MyCard.vue";
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
    MyImageTop,
    MyFooter,
    MyContext,
    MyCard,
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
          this.$store.commit("setLogin", false)
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
  mounted() {
  },
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

<style scoped>
.body {
  padding: 0;
  margin: 0;
  width: 100%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}
.left {
  width: 80%;
  height: auto;
}
.right {
  height: auto;
}
.left .right {
  margin: 50px;
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