<template>
  <div>
    <div class="card">
      <div class="logo">
        <img :src="logoUrl" alt=""/>
        <div class="transition"></div>
      </div>
      <div class="name">{{ name }}</div>
      <div class="logion">{{ signature }}</div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * 参数：
   * name           名称
   * signature      个性签名  
   */
  props: ["name", "signature"],
  data() {
    return {
      //这是获取qq头像的api
      logoUrl:"https://tenapi.cn/v2/qqimg?qq="
    };
  },
  mounted() {

    //这里从仓库拿qq来渲染头像
    this.logoUrl = this.logoUrl + this.$store.state.qq;
  },
  computed: {
    logoCss() {
      return {
      };
    },
  },
};
</script>
<style scoped>
.card {
  margin-top: 20px;
  background-color: rgb(255, 255, 255);
  width: 300px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  font-family: YuTaiXianTangPingTi-2;
}
.card .logo {
  width: 100%;
  background-image:url(@/assets/bg.gif);
  background-size: cover;
  background-position: center;
  padding-top: 100px;
}
.card .logo img {
  border-radius: 50px;
  display: block;
  height: 100px;
  margin: auto;
  padding: 5px;
}
.card .name {
  font-size: 20px;
  margin: 10px 0;
}
.card .logion{
  font-size: 13px;
  margin: 10px 0;

}
</style>