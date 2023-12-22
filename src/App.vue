<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  beforeMount() {},
  mounted() {},
  methods: {},
  components: {},
};
</script>

<style>
@font-face {
  font-family: "YuTaiXianTangPingTi";
  src: url("@/assets/YuTaiXianTangPingTi-2.ttf");
}
@font-face {
  font-family: "YeZiGongChangFitFitDaTi";
  src: url("@/assets/YeZiGongChangFitFitDaTi-2.ttf");
}
@font-face {
  font-family: "YeZiGongChangAoYeHei";
  src: url("@/assets/YeZiGongChangAoYeHei-2.ttf");
}
@font-face {
  font-family: "ShenHaiLiDeXingChen";
  src: url("@/assets/ShenHaiLiDeXingChen-2.ttf");
}

@font-face {
  font-family: "方正行黑简体";
  src: url("@/assets/方正行黑简体.TTF");
}
body {
  margin: 0;
  padding: 0;
  background-color: #efefef;
  background-image: linear-gradient(
      90deg,
      rgba(60, 10, 30, 0.04) 3%,
      transparent 0
    ),
    linear-gradient(1turn, rgba(60, 10, 30, 0.04) 3%, transparent 0);
  background-size: 20px 20px;
}
</style>
