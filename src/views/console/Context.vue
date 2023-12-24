<template>
  <div class="main">
    <div class="top">
      <div class="left">logo</div>
      <div class="right">
        <router-link v-for="item in list" :key="item.name" :to="item.path">
          <img alt="" width="20px" height="20px" :src="item.icon" v-show="item.icon != '' && item.icon!= null"/>
          {{ item.name }}
        </router-link>
      </div>
    </div>
    <!-- 这里时right上方路由匹配出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "ConsoleContext",
  props: [],
  data() {
    return {
      list: [
        {
          name: "分类",
          path: "/console/context/classify",
        },
        {
          name: "标签",
          path: "/console/context/label",
        },
        {
          name: "回收站",
          path: "/console/context/recovered",
        },
        {
          name: "新建",
          path: "/console/context/news",
          icon: require("@/assets/console/plus-circle.svg"),
        },
      ],
    };
  },
};
</script>

<style lang="less" scoped>
.main {
  .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    .right {
      height: 50px;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      text-align: center;
      a {
        display: flex;
        gap: 8px;
        align-items: center;
        color: black;
        font-size: 13px;
        margin-right: 20px;
        text-decoration: none;
        border: 1px solid #ccc;
        background-color: transparent;
        padding: 3px 10px;
        border-radius: 5px;
      }
      a:hover {
        background-color: #ccc;
      }
      a:nth-last-child(1) {
        color: white;
        font-size: 16px;
        padding: 8px 20px;
        border: 1px solid transparent;
        background-color: black;
        border-radius: 5px;
      }
      a:nth-last-child(1):hover {
        background-color: #1b1b1b;
      }
    }
  }
}
</style>