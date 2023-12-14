<template>
  <div class="mymusic">
    <div class="left">
      <el-row class="tac">
        <el-col :span="30">
          <div class="logo">
            <img src="@/assets/logo.jpg" alt="" />
          </div>
          <el-input
            class="input"
            placeholder="请输入歌曲"
            v-model="input"
            clearable
          >
          </el-input>
          <el-menu
            default-active="1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
          >
            <el-menu-item index="1">
              <i class="el-icon-headset"></i>
              <span slot="title">预览</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-headset"></i>
              <span slot="title">广场</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-headset"></i>
              <span slot="title">喜欢</span>
            </el-menu-item>
          </el-menu>
        </el-col>
      </el-row>
    </div>
    <div class="right">
      <div class="player">
        <div
          class="play"
          :class="play ? 'play2' : 'play'"
          @click="playClick"
        ></div>
        <video controls ref="video">
          <source
            src="http://127.0.0.1:8888/data/20230520/music1.m4a"
            type="video/mp4"
          />
        </video>
      </div>
      <el-table @row-dblclick="rowDbclick" :data="musics" style="width: 100%">
        <el-table-column type="index" width="50"> </el-table-column>
        <el-table-column prop="name" label="歌曲" width="180">
        </el-table-column>
        <el-table-column prop="date" label="歌手" width="180">
        </el-table-column>
        <el-table-column prop="address" label="专辑"></el-table-column>
        <el-table-column prop="address" label="时长"></el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="total"
        class="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      input: "",
      play: false,
      rules: [(value) => !!value || "请输入歌曲"],
      musics: [
        {
          name: "富士山下",
          date: "陈奕迅",
          url: this.$store.state.domain + "/data/20230520/music1.m4a",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
          url: this.$store.state.domain + "/data/20230520/music1.m4a",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
          url: this.$store.state.domain + "/data/20230520/music1.m4a",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
          url: this.$store.state.domain + "/data/20230520/music1.m4a",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
        {
          name: "富士山下",
          date: "陈奕迅",
        },
      ],
      total: 1200,
    };
  },
  created() {
    axios.get(this.$store.state.domain + "/musics").then((res) => {
      console.log(res.data);
    })
    .catch((err) =>{
      console.log(err);
    })
  },
  methods: {
    rowDbclick(e) {
      const video = this.$refs.video;
      video.setAttribute("src", e.url);
      video.play();
      this.play = true;
      console.log(e.name);
    },
    playClick() {
      const video = this.$refs.video;
      if (this.play) {
        video.pause();
      } else {
        video.play();
      }
      this.play = !this.play;
    },
  },
};
</script>

<style scoped>
.mymusic {
  width: 100%;
  height: 100%;
  position: relative;
}
.left {
  width: 200px;
  background-color: #ffffff;
  float: left;
}
.total {
  padding-left: 300px;
}
.left > div {
  height: 40px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  color: #333;
}
.input {
  padding: 10px;
}
.left .el-menu-vertical-demo {
  border-right: none;
}
.right {
  padding-left: 200px;
  float: left;
  width: 100%;
  margin-left: -200px;
  background-color: white;
}
.right .player {
  display: flex;
  align-items: center;
}
.play {
  width: 50px;
  height: 50px;
  background-image: url(@/assets/player/继续播放.png);
  background-size: cover;
  margin: 10px;
}
.play2 {
  background-image: url(@/assets/player/暂停.png);
}
video {
  display: none;
}
.logo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100px;
  position: relative;
}
.logo img {
  margin: 10px;
  height: 100%;
}
.logo span {
  font-family: YuTaiXianTangPingTi-2;
  font-size: 20px;
  color: #333;
}
</style>