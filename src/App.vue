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
  src: url("@/assets/font/YuTaiXianTangPingTi-2.ttf");
}
@font-face {
  font-family: "YeZiGongChangFitFitDaTi";
  src: url("@/assets/font/YeZiGongChangFitFitDaTi-2.ttf");
}
@font-face {
  font-family: "YeZiGongChangAoYeHei";
  src: url("@/assets/font/YeZiGongChangAoYeHei-2.ttf");
}
@font-face {
  font-family: "ShenHaiLiDeXingChen";
  src: url("@/assets/font/ShenHaiLiDeXingChen-2.ttf");
}

@font-face {
  font-family: "方正行黑简体";
  src: url("@/assets/font/方正行黑简体.TTF");
}
@font-face {
  font-family: "Cubic";
  src: url("@/assets/font/Cubic_11_1.010_R.ttf");
}
@font-face {
  font-family: "寒蝉点阵体";
  src: url("@/assets/font/寒蝉点阵体.ttf");
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
/*滚动条里面轨道*/
body::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 1px rgba(255, 255, 255, 0);
  background-color: white;
}
/*定义滚动条整体的样式*/
body::-webkit-scrollbar{
  width: 7px;
  height: 7px;
  background-color: white;
}
/*滚动条的样式*/
body::-webkit-scrollbar-thumb{
  background-color: #fb6c28;
  border-radius: 10px;
}
</style>
