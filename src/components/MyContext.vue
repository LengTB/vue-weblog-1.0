<template>
  <div class="mycontext">
    <div class="top"><h3 style="margin-left: 20px">最新文章</h3></div>
    <div class="item" v-for="(item, index) in contest" :key="index">
      <a href="#">{{ item.title }}</a>
      <p class="text">摘要：{{ item.body }}</p>
      <p>
        <span class="time"
          >{{ item.date }}/<i class="looking"></i>{{ item.looking }}
          </span
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
a{
  color:black;
  text-decoration: none;
}
.mycontext {
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 20px;
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
.mycontext .item a {
  display: block;
  font-size: 20px;
  margin-left: 15px;
  margin-right: 20px;
  margin-bottom: 15px;

}
.text {
  text-indent: 2em;
  height: 105px;
  overflow: hidden;
}
.time{
  display: block;
  margin: 5px 0px;
  color: #888;
  font-size: 14px;
}
</style>