<template>
  <div class="myadmin">
    <div class="content">
      <div class="head">
        <div class="logo">
          <span> Cold的窝 </span>
        </div>
        <div class="right-btn">
          <button class="link-other" @click="clickHome">主页</button>
          <a class="into-home"> 不想登录吗？ </a>
        </div>
      </div>
      <div class="form-content">
        <h1 class="title">注册</h1>
        <h3 class="tips">请输入账号和密码哦</h3>
        <div class="input-wrapper">
          <input type="text" v-model="text" />
          <input type="password" v-model="password1" />
          <input type="password" v-model="password2" />
        </div>
        <button class="btn" ref="btn" @click="logo">注册</button>
        <div class="Copyright">Copyright @ TobyCold</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColdRegister",
  components: {},
  data() {
    return {
      text: "",
      password1: "",
      password2: "",
    };
  },
  methods: {
    clickHome() {
      this.$router.push("/");
    },
    goRegister() {
      this.$router.push("/register");
    },
  },
};
</script>

<style lang="less" scoped>
@font-face {
  font-family: PlastoTrial_ExtraLight;
  font-weight: 700;
  src: url(@/assets/font/PlastoTrial-ExtraLight.otf) format("truetype");
  text-rendering: optimizeLegibility;
}
@font-face {
  font-family: PlastoTrial_ExtraBold;
  font-weight: 700;
  src: url(@/assets/font/PlastoTrial-ExtraBold.otf) format("truetype");
  text-rendering: optimizeLegibility;
}
* {
  padding: 0;
  margin: 0;
}

.content {
  width: 100vw;
  height: 100vh;
  background-color: rgb(246, 242, 235);
  position: relative;
  overflow: hidden;
  .head {
    width: 100%;
    height: 50px;
    position: fixed;
    left: 0;
    top: 0;
    padding: 1% 5%;
    display: flex;
    box-sizing: border-box;
    .logo {
      width: 30%;
      font-family: PlastoTrial_ExtraBold;
      font-size: 50px;
    }
    .right-btn {
      flex: 1;
      .into-home {
        float: right;
        line-height: 50px;
        font-family: PlastoTrial_ExtraBold;
        font-size: 20px;
        color: black;
        cursor: pointer;
        text-decoration: none;
      }
      .link-other {
        float: right;
        margin-left: 3%;
        width: 150px;
        height: 50px;
        border: 0;
        background-color: tomato;
        border-radius: 8px;
        font-family: PlastoTrial_ExtraBold;
        font-size: 18px;
        cursor: pointer;
        transition: 0.5s;
      }
      .link-other:hover {
        background-color: rgb(173, 67, 48);
      }
    }
  }
  .form-content {
    width: 400px;
    background-color: #fff;
    border-radius: 30px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;

    .title {
      margin: 4% 0;
      font-family: PlastoTrial_ExtraBold;
    }
  }
  .form-content::before {
    content: "";
    width: 465px;
    height: 650px;
    display: block;
    position: absolute;
    left: -550px;
    bottom: 10px;
    background-image: url(@/assets/icon/bg_2.png);
    background-size: cover;
  }
  .form-content::after {
    content: "";
    width: 740px;
    height: 520px;
    display: block;
    position: absolute;
    right: -730px;
    bottom: 10px;
    background-image: url(@/assets/icon/gb.png);
    background-size: cover;
  }
}

.form-content .content .form-content .tips {
  font-size: 16px;
  margin-bottom: 8%;
  font-family: PlastoTrial_ExtraLight;
}
.content .form-content .input-wrapper {
  width: 100%;
  margin: 2% 0;
}
.content .form-content .input-wrapper input {
  width: 100%;
  height: 50px;
  outline: none;
  margin: 10px 0;
  border: 1px solid rgb(231, 231, 231);
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 20px;
  transition: 0.2s;
}
.content .form-content .input-wrapper input:focus {
  border: 1px solid #000;
}

.content .form-content .btn {
  width: 100%;
  height: 40px;
  background-color: rgb(254, 200, 135);
  border-radius: 10px;
  border: 0;
  font-family: PlastoTrial_ExtraBold;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}
.content .form-content .btn:hover {
  box-shadow: 1px 10px 32px 1px rgba(254, 200, 135, 0.37);
}

.content .form-content .Copyright {
  position: absolute;
  bottom: -50px;
  font-weight: 100;
} /*# sourceMappingURL=style.css.map */
</style>