<template>
  <div class="about">
    <MyHomeTop :a="index"></MyHomeTop>
    <MyImageTop class="image" :heigth="50"></MyImageTop>
    <div class="content">
      <el-timeline>
        <el-timeline-item timestamp="2018/4/12" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/12 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/3" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/3 20:46</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2018/4/2" placement="top">
          <el-card>
            <h4>更新 Github 模板</h4>
            <p>王小虎 提交于 2018/4/2 20:46</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import MyHomeTop from "@/components/MyHomeTop.vue";
import MyImageTop from "@/components/MyImageTop.vue";
export default {
  name: "MyClassify",
  data() {
    return {
      index: 1,
    };
  },
  components: {
    MyHomeTop,
    MyImageTop,
  },
};
</script>

<style scoped>
.content {
  top: 50px;
  width: 80%;
  margin: auto;
  position: relative;
}
</style>