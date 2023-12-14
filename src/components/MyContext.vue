<template>
  <div class="mycontext">
    <div class="top"><h3 style="margin-left: 20px">最新文章</h3></div>
    <div class="item" v-for="(item, index) in test" :key="index">
      <h2>{{ item.title }}</h2>
      <p class="text">摘要：{{ item.body }}</p>
      <p>
        <span class="time"
          >{{ item.time }}/<i class="looking"></i>{{ item.looking }}</span
        >
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["contest"],
};
</script>

<style scoped>
.mycontext {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px auto;
  width: 90%;
  background-color: white;
  border-radius: 20px;
}
.mycontext .top{
  margin:20px;
  color:#e29300
}
.mycontext .item {
  padding: 10px;
  margin: 0px 10px;
  border-top: solid 1px #ebedf4;
  word-wrap: break-word;
  max-height: 200px;
}
.mycontext .item h2 {
  margin: 10px 20px;
}
.text {
  text-indent: 2em;
  height: 105px;
  overflow: hidden;
}
</style>