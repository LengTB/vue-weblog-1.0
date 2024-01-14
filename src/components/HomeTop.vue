<template>
  <div class="top" ref="top">
    <img
      src="@/assets/icon/彩色裸底（logo放大版）.png"
      alt="logo"
      class="logo"
      @click="$router.push('/')"
    />
    <div class="link">
      <router-link
        v-for="(item, i) in linkdata"
        :key="i"
        :to="item.href"
        exact
        active-class="active"
      >
        {{ item.name }}
      </router-link>
    </div>
    <div class="login">
      <el-avatar class="avatar" :src="circleUrl"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  props: ["color"],
  data() {
    return {
      linkdata: [
        {
          name: "首页",
          href: "/home",
        },
        {
          name: "newyear",
          href: "/newyear",
        },
        {
          name: "管理",
          href: "/console",
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
      this.$store.commit("setLogin", false);
    }
  },
  mounted() {
    if (this.color != null) {
      this.$refs.top.style.backgroundColor = this.color;
    }
  },
};
</script>

<style lang="less" scoped>
.top {
  --height: 55px;
  height: var(--height);
  display: flex;
  justify-content: space-between;
  transition: height 2s ease;
  animation: top 1s ease;
  backdrop-filter: blur(10px);
  .logo {
    padding: 0 10px;
    backdrop-filter: light(10px);
    width: var(--height);
    animation: top 1s ease-in;
  }
  .link {
    display: flex;
    width: 300px;
    text-decoration: none;
    justify-content: center;
    align-items: center;
    gap: 10px;
    font-family: Cubic;
    a {
      color: white;
      padding: 10px;
      border-radius: 10px;
      transition: all 0.35s ease;
      text-decoration: none;
      mix-blend-mode: difference;
    }
    a:hover{
      color: white !important;
      background-color: rgba(0, 0, 0, 0.8);
      text-shadow: none;
    }
  }
  .login {
    padding: 5px 10px;
  }
}
.active {
  color: black !important;
  text-shadow: 1px 1px 2px #888888, 0 0 1em #888888, 0 0 1.2em #888888
}
@keyframes top {
  from {
    height: 0px;
  }
  to {
    height: var(--height);
  }
}

@media screen and (max-width: 470px) {
  .link > * {
    visibility: hidden;
  }
}
</style>