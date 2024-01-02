<template>
  <div class="top">
    <img
      src="@/assets/icon/彩色裸底（logo放大版）.png"
      alt="logo"
      class="logo"
      @click="$router.push('/')"
    />
    <div class="nav">
      <router-link
        class="item"
        v-for="(item, i) in linkdata"
        :key="i"
        :to="item.href"
        exact
        active-class="active"
      >
        {{ item.name }}
      </router-link>
      <el-button
        class="login"
        type="primary"
        @click="clickLogin"
        v-show="this.$store.state.login"
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
          href: "/home",
        },
        {
          name: "控制台",
          href: "/console",
        },
        {
          name: "demo1",
          href: "/article/cold",
        },
        {
          name: "关于我",
          href: "/about",
        },
      ],
    };
  },
  methods: {
    clickLogin() {
      this.$router.push("/login");
    },
    select(index) {
      this.$emit("change", index);
    },
  },
  created() {
    if (this.$store.state.token != null) {
      console.log("已登录");
      this.$store.commit("setLogin", false);
    }
  },
  mounted() {},
};
</script>

<style lang="less" scoped>
.top {
  height: 50px;
  background-color: rgb(255, 255, 255);
  transition: height 2s ease;
  animation: top 1s ease;
  width: 100%;
  position: relative;
  .logo {
    position: absolute;
    width: 50px;
    height: 50px;
    margin: 0px 20px;
    animation: top 1s ease-in;
    z-index: 99;
  }
  .nav {
    .item {
      font-family: YeZiGongChangAoYeHei;
      height: 50px;
      line-height: 50px;
      padding: 0px 10px;
      color: black;
      text-decoration: none;
      animation: top 1s ease;
    }
    .item:hover {
      color: #fb6c28 !important;
    }
    height: 100%;
    position: absolute;
    width: 100%;
    display: flex;
    justify-content: flex-end;
    flex-direction: row;
    align-items: center;
    .login:hover {
      background-color: rgb(173, 67, 48);
      border-color: rgb(173, 67, 48);
    }
    .login {
      color: white;
      background-color: tomato;
      border-color: tomato;
    }
    > * {
      margin: 10px 10px;
    }
    .active {
      color: #fb6c28 !important;
      text-shadow: 1px 1px 2px #feb18e, 0 0 1em #f49b72, 0 0 1.2em #f9986a;
      border-bottom: 7px solid #fb6c28;
    }
  }
}

@keyframes top {
  from {
    height: 0px;
  }
  to {
    height: 50px;
  }
}
</style>