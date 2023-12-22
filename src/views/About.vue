<template>
  <div class="about">
    <HomeTop :a="index"></HomeTop>
    <MyImageTop class="image" :heigth="50"></MyImageTop>
    <div class="content">
      <el-timeline>
        <el-timeline-item timestamp="2023/12/14" placement="top">
          <el-card>
            <h4>主页界面完善</h4>
            <p>TobyCold 提交于 2023/12/14 23:30</p>
          </el-card>
        </el-timeline-item>
        <el-timeline-item timestamp="2023/11/22" placement="top">
          <el-card>
            <h4>上线测试</h4>
            <p>TobyCold 提交于 2023/11/22 20:33</p>
          </el-card>
        </el-timeline-item>
      </el-timeline>
    </div>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
import MyImageTop from "@/components/MyImageTop.vue";
export default {
  name: "ColdAbout",
  data() {
    return {
      index: 1,
    };
  },
  components: {
    HomeTop,
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