<template>
  <div class="home">
    <MyHomeTop :index="index" :login="login" @change="chageIndex"></MyHomeTop>
    <MyImageTop></MyImageTop>
    <div class="body">
      <div class="left">
        <MyContext :contest="contest"></MyContext>
      </div>
      <div class="right">
        <MyCard
          :name="name"
          :signature="signature"
          ref="Card"
        ></MyCard>
      </div>
    </div>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHomeTop from "@/components/MyHomeTop.vue";
import MyImageTop from "@/components/MyImageTop.vue";
import MyFooter from "@/components/MyFooter.vue";
import MyContext from "@/components/MyContext.vue";
import MyCard from "@/components/MyCard.vue";
export default {
  data() {
    return {
      login: false,
      index: 0,
      name: "",
      signature: "",
      contest: [
        {
          title: "",
          body: "",
          time: "",
          looking: 0,
        },
      ],
    };
  },
  components: {
    MyHomeTop,
    MyImageTop,
    MyFooter,
    MyContext,
    MyCard,
  },
  //创建时
  created() {
    //验证登录
    this.$axios
      .get("/console/verify")
      .then((ref) => {
        console.log(ref);
        if (ref.data.state == 200) {
          this.login = true;
        }
      })
      .catch(() => {
        //未登录
        this.$notify.info({
          title: "未登录",
          message: "点击右上角登录哦",
          position: "bottom-right",
        });
      });
  },
  //挂载完成
  mounted() {

      this.$axios
        .get(this.$store.state.domain + "/data")
        .then((ref) => {
          if (ref.data.code == 1) {
            this.name = ref.data.data.name;
            this.signature = ref.data.data.signature;
            this.contest = ref.data.data.contest;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    
  
  },
  //自定义方法
  methods: {
    chageIndex(index){
      console.log(index);
      this.index = index;
    }
  },
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
@media (min-width: 992px) {
  .context .left {
    width: 100%;
  }

  .context .right .card {
    display: none;
  }
}
@media (min-width: 990px) {
  .context .left {
    width: 80%;
  }
}
</style>