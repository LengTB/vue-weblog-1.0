<template>
  <div class="myadmin">
    <div class="content">
      <div class="head">
        <div class="logo">
          <span @click="$router.push('/')" style="cursor: pointer">
            Cold的窝
          </span>
        </div>
        <div class="right-btn">
          <button class="link-other" @click="$router.push('/')">主页</button>
          <a class="into-home" @click="$message.error('哎呦你干嘛呀~')">
            不想登录吗？
          </a>
        </div>
      </div>
      <div class="form-content">
        <h1 class="title">登录</h1>
        <h3 class="tips">请输入账号和密码哦</h3>
        <div class="input-wrapper">
          <div>
            <input type="text" v-model="text" placeholder="账号" />
          </div>
          <div>
            <input type="password" v-model="password" placeholder="密码" />
          </div>
        </div>
        <div class="forgot-pwd">
          <span @click="$router.push('/other')">忘记密码？</span>
        </div>
        <button class="btn" @click="login">登录</button>
        <div class="request">
          你不会还没有账号吧？
          <span @click="$router.push('/register')">
            注册
          </span>
        </div>
        <div class="Copyright">Copyright © 2024 Cold的窝 All rights reserved.</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColdLogin",
  components: {},
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    login() {
      if (this.text == "" || this.password == "") {
        alert("请输入账号和密码");
      } else {
        this.$axios
          .post("/console/login", {
            account: this.text,
            password: this.password,
          })
          .then((ref) => {
            if (ref.data.code == 1) {
              //登录成功，设置token
              this.$store.commit("setToken", ref.data.data);
              this.$router.push("/");
            } else {
              this.$message.error(ref.data.msg);
            }
          })
          .catch(() => {
            this.$message.error("登录失败");
            setTimeout(() => {
              this.$router.go(0);
            }, 1000);
          });
      }
    },
  },
};
</script>

<style lang="less" scoped>
.content {
  width: 100vw;
  height: 100vh;
  background-image: url(@/assets/bg/login.png);
  position: relative;
  overflow: hidden;
  font-family: Cubic;

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
      color: white;
      width: 30%;
      font-size: 50px;
    }

    .right-btn {
      flex: 1;

      .into-home {
        float: right;
        line-height: 50px;
        font-size: 20px;
        color: white;
        mix-blend-mode: difference;
        cursor: pointer;
        text-decoration: none;
      }

      .link-other+ {
        color: white;
        float: right;
        margin-left: 3%;
        width: 150px;
        height: 50px;
        border: 0;
        font-family: Cubic;
        background-color: rgb(2, 133, 100);
        font-size: 18px;
        cursor: pointer;
        transition: 0.5s;
      }

      .link-other:hover {
        background-color: rgb(1, 83, 63);
      }
    }
  }

  .form-content {
    width: 400px;
    backdrop-filter: blur(10px);
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: 50px;
    box-shadow: 1px 1px 10px rgb(3, 3, 3);

    .title {
      color: rgb(231, 231, 231);
      margin: 4% 0;
    }
  }
}

.form-content .tips {
  color: rgb(231, 231, 231);
  font-size: 16px;
  margin-bottom: 8%;
}

.content .form-content .input-wrapper {
  width: 90%;
  margin: 2% 0;
  position: relative;

  span {
    left: -55px;
    margin: 25px 10px 10px 10px;
    position: absolute;
    font-size: 15px;
    color: #a19e9e;
  }
}

.content .form-content .input-wrapper input {
  background-color: #00000000;
  width: 100%;
  height: 50px;
  outline: none;
  font-family: Cubic;
  margin: 10px 0;
  border: 1px solid rgb(231, 231, 231);
  box-sizing: border-box;
  padding: 10px 20px;
  font-size: 20px;
  transition: 0.2s;
}

.content .form-content .input-wrapper input:focus {
  border: 1px solid #000;
  background-color: #00746a;
}

.content .form-content .input-wrapper input:focus+span {
  color: #000;
}

.content .form-content .forgot-pwd {
  width: 100%;
  margin-bottom: 6%;
}

.content .form-content .forgot-pwd span {
  color: white;
  float: right;
  cursor: pointer;
}

.content .form-content .forgot-pwd span:hover {
  text-shadow: rgb(254, 200, 135) 1px 5px 10px;
}

.content .form-content .btn {
  color: white;
  width: 80%;
  height: 40px;
  background-color: rgb(2, 133, 100);
  border: 0;
  font-family: Cubic;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;
}

.content .form-content .btn:hover {
  box-shadow: 0px 0px 10px 1px rgba(3, 145, 121, 0.753);
}

.content .form-content .other-login {
  width: 100%;
  margin: 3%;
}

.content .form-content .other-login {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.content .form-content .other-login {
  width: 5%;
  display: inline-block;
  height: 1px;
  background-color: #000;
}

.content .form-content .other-login {
  vertical-align: middle;
  margin: 0 10px;
  display: inline-block;
  color: #000;
  white-space: nowrap;
}

.content .form-content .other-login {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.content .form-content .other-login {
  width: 110px;
  height: 35px;
  text-align: center;
  box-shadow: 1px 1px 1px #2e2e2e4d;
  cursor: pointer;
  font-weight: 600;
  margin: 0 20px;
  transition: 0.5s;
  background-color: #fff;
  border-radius: 8px;
  border: 1px solid rgb(231, 231, 231);
}

.content .form-content .other-login svg {
  width: 35px;
  height: 35px;
  fill: #000;
  vertical-align: middle;
}

.content .form-content span {
  vertical-align: middle;
}

.content .form-content .other-login {
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 1px 10px 32px 1px rgba(186, 175, 221, 0.37);
}

.content .form-content .other-login svg {
  fill: #000;
}

.content .form-content .request {
  color: white;
  margin: 5% 0;
}

.content .form-content .request span {
  font-weight: 900;
  cursor: pointer;
  margin-left: 5px;
}

.content .form-content .Copyright {
  color: white;
  mix-blend-mode: difference;
  position: absolute;
  bottom: -50px;
  font-weight: 100;
}
</style>