<template>
  <div>
    <div class="card">
      <div class="logo">
        <img src="@/assets/logo.jpg" alt="" />
        <div class="transition"></div>
      </div>
      <div class="name">{{ name }}</div>
      <div class="logion">{{ logion }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["logo", "name", "logion"],
  data() {
    return {};
  },
  mounted() {
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