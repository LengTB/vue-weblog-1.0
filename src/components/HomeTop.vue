<template>
  <div class="top">
    <img src="@/assets/logo.jpg" alt="logo" class="logo" />
    <div class="nav">
      <div class="item" v-for="(item, i) in linkdata" :key="i">
        <a :href="item.href" @click="select(i)" :class="i == index ? 'select' : ''">{{ item.name }}</a>
      </div> 
      <el-button class="login" type="primary" @click="clickLogin" v-show="this.$store.state.login"
        >登录</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      require: true,
    },
  },
  data() {
    return {
      linkdata: [
        {
          name: "首页",
          href: "#/",
        },
        {
          name: "随笔",
          href: "#/console",
        },
        {
          name: "play",
          href: "#/play",
        },
        {
          name: "关于我",
          href: "#/about",
        },
      ],
    };
  },
  methods: {
    clickLogin() {
      this.$router.push("/login");
    },
    select(index) {
      this.$emit('change', index)
    },
  },
  created() {},
  mounted() {
  },
};
</script>

<style scoped>

.logo {
  position: absolute;
  width: 50px;
  height: 50px;
  margin: 0px 20px;
  animation: top 1s ease-in;
}
.top {
  height: 50px;
  background-color: rgb(255, 255, 255);
  transition: height 2s ease;
  animation: top 1s ease;
  width: 100%;
  position: relative;
}
@keyframes top {
  from {
    height: 0px;
  }
  to {
    height: 50px;
  }
}

.nav {
  height: 100%;
  position: absolute;
}
.nav .item {
  font-family: YeZiGongChangAoYeHei;
  height: 50px;
  line-height: 50px;
  padding: 0px 10px;
}
.nav .item a {
  color: black;
  text-decoration: none;
  animation: top 1s ease;
}
.nav .item a:hover {
  color: #fb6c28 !important;
}
.nav .item .select {
  color: #fb6c28 !important;
  text-shadow: 1px 1px 2px #feb18e, 0 0 1em #f49b72, 0 0 1.2em #f9986a;
  border-bottom: 3px solid #fb6c28;
}

.nav {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: center;
}
.nav > * {
  margin: 10px 10px;
}
.nav .login:hover {
  background-color: rgb(173, 67, 48);
  border-color: rgb(173, 67, 48);
}
.nav .login {
  font-family: YuTaiXianTangPingTi;
  color: white;
  background-color: tomato;
  border-color: tomato;
}
</style>