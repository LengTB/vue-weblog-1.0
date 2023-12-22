<template>
  <div class="mymusic">
    <HomeTop></HomeTop>
    <div class="body">
      <div class="hotspots">
        <video ref="video" controls width="500px">
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
        this.$refs.video.src = url;
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