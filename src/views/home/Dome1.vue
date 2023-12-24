<template>
  <div>
    <HomeTop></HomeTop>
    <div class="body">
      <div class="hotspots">
        <video ref="demo1" controls width="500px">
        </video>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
export default {
  name: "ColdDemo1",
  data() {
    return {};
  },

  created() {
    this.$axios
      .get("/api/data/20230520/demo2.mp4", {
        headers: {
          token: this.$store.state.token,
        },
      })
      .then((res) => {
        const data = res.data;
        const bolbData = new Blob([data], { type: "video/mp4" });
        const url = URL.createObjectURL(bolbData);
        this.$refs.demo1.src = url;
      })
      .catch(() => {
        this.$message.error("请检查网络状况");
      });
  },
  mounted() {},
  methods: {},
  components: {
    HomeTop,
  },
};
</script>

<style scoped>

</style>