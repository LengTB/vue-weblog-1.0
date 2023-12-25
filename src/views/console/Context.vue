<template>
  <div class="main">
        <ContextTop :list="list"></ContextTop>
        <div class="body">文章列表</div>
      <router-view></router-view>
  </div>
</template>

<script>
import ContextTop from "@/components/console/top.vue"
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
  components: {
    ContextTop,
  },
};
</script>

<style lang="less" scoped>
</style>