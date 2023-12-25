<template>
  <div class="main">
    <ContextTop :list="list" @chlickItem="chlickItem"></ContextTop>
    <v-md-editor
      v-model="text"
      height="94vh"
      toc-nav-position-right
      :include-level="[1, 2, 3, 4]"
    ></v-md-editor>
  </div>
</template>

<script>
import ContextTop from "@/components/console/top.vue";
export default {
  name: "ContextNew",
  data() {
    return {
      list: [
        {
          name: "预览",
        },
        {
          name: "保存",
        },
        {
          name: "发布",
          icon: require("@/assets/console/plus-circle.svg"),
        },
      ],
      text: "# Cold的窝开发中……",
    };
  },
  methods: {
    chlickItem(index){
      console.log(index);
    }
  },
  components: {
    ContextTop,
  },
};
</script>

<style lang="less" scoped>
</style>