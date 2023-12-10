<template>
  <div class="myadmin">
    <div class="content">
      <div class="head">
        <div class="logo">
          <span> Cold的窝 </span>
        </div>
        <div class="right-btn">
          <button class="link-other" @click="clickHome">Home</button>
          <a class="into-home"> 不想登录吗？ </a>
        </div>
      </div>
      <div class="form-content">
        <h1 class="title">登录</h1>
        <h3 class="tips">请输入账号和密码哦</h3>
        <div class="input-wrapper">
          <input type="text" v-model="text" />
          <input type="password" v-model="password" />
        </div>
        <div class="forgot-pwd">
          <span>忘记密码？</span>
        </div>
        <button class="btn" ref="btn" @click="logo">登录</button>
        <div class="other-login">
          <div class="divider">
            <span class="line"></span>
            <span class="divider-text">其他登录方式</span>
            <span class="line"></span>
          </div>
          <div class="other-login-wrapper">
            <div class="other-login-item">
              <svg
                t="1695533328061"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="4023"
                width="128"
                height="128"
              >
                <path
                  d="M824.8 613.2c-16-51.4-34.4-94.6-62.7-165.3C766.5 262.2 689.3 112 511.5 112 331.7 112 256.2 265.2 261 447.9c-28.4 70.8-46.7 113.7-62.7 165.3-34 109.5-23 154.8-14.6 155.8 18 2.2 70.1-82.4 70.1-82.4 0 49 25.2 112.9 79.8 159-26.4 8.1-85.7 29.9-71.6 53.8 11.4 19.3 196.2 12.3 249.5 6.3 53.3 6 238.1 13 249.5-6.3 14.1-23.8-45.3-45.7-71.6-53.8 54.6-46.2 79.8-110.1 79.8-159 0 0 52.1 84.6 70.1 82.4 8.5-1.1 19.5-46.4-14.5-155.8z"
                  p-id="4024"
                ></path>
              </svg>
              <span>企鹅</span>
            </div>
            <div class="other-login-item">
              <svg
                t="1695533780568"
                class="icon"
                viewBox="0 0 1024 1024"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                p-id="5066"
                width="128"
                height="128"
              >
                <path
                  d="M664.250054 368.541681c10.015098 0 19.892049 0.732687 29.67281 1.795902-26.647917-122.810047-159.358451-214.077703-310.826188-214.077703-169.353083 0-308.085774 114.232694-308.085774 259.274068 0 83.708494 46.165436 152.460344 123.281791 205.78483l-30.80868 91.730191 107.688651-53.455469c38.558178 7.53665 69.459978 15.308661 107.924012 15.308661 9.66308 0 19.230993-0.470721 28.752858-1.225921-6.025227-20.36584-9.521864-41.723264-9.521864-63.862493C402.328693 476.632491 517.908058 368.541681 664.250054 368.541681zM498.62897 285.87389c23.200398 0 38.557154 15.120372 38.557154 38.061874 0 22.846334-15.356756 38.156018-38.557154 38.156018-23.107277 0-46.260603-15.309684-46.260603-38.156018C452.368366 300.994262 475.522716 285.87389 498.62897 285.87389zM283.016307 362.090758c-23.107277 0-46.402843-15.309684-46.402843-38.156018 0-22.941502 23.295566-38.061874 46.402843-38.061874 23.081695 0 38.46301 15.120372 38.46301 38.061874C321.479317 346.782098 306.098002 362.090758 283.016307 362.090758zM945.448458 606.151333c0-121.888048-123.258255-221.236753-261.683954-221.236753-146.57838 0-262.015505 99.348706-262.015505 221.236753 0 122.06508 115.437126 221.200938 262.015505 221.200938 30.66644 0 61.617359-7.609305 92.423993-15.262612l84.513836 45.786813-23.178909-76.17082C899.379213 735.776599 945.448458 674.90216 945.448458 606.151333zM598.803483 567.994292c-15.332197 0-30.807656-15.096836-30.807656-30.501688 0-15.190981 15.47546-30.477129 30.807656-30.477129 23.295566 0 38.558178 15.286148 38.558178 30.477129C637.361661 552.897456 622.099049 567.994292 598.803483 567.994292zM768.25071 567.994292c-15.213493 0-30.594809-15.096836-30.594809-30.501688 0-15.190981 15.381315-30.477129 30.594809-30.477129 23.107277 0 38.558178 15.286148 38.558178 30.477129C806.808888 552.897456 791.357987 567.994292 768.25071 567.994292z"
                  p-id="5067"
                ></path>
              </svg>
              <span>绿泡泡</span>
            </div>
          </div>
        </div>
        <div class="request">你不会还没有账号吧？<span>来一打吧</span></div>
        <div class="Copyright">Copyright @ TobyCold</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  components: {},
  data() {
    return {
      text: "",
      password: "",
    };
  },
  methods: {
    clickHome() {
      this.$router.push("/");
    },
    logo() {
      const btn = this.$refs.btn;
      if (this.text == "" || this.password == "") {
        alert("请输入账号和密码");
      } else {
        axios
          .post("http://127.0.0.1:8888/console/login", {
            account: this.text,
            password: this.password,
          })
          .then((ref) => {
            if (ref.data.code == 1) {
              this.$store.state.token = ref.data.data;
              this.$router.push("/");
            } else {
              this.$router.go(0);
              this.$message.error(ref.data.msg);
            }
          })
          .catch((err) => {
            this.$router.go(0);
            console.log(err);
          });

        btn.style.backgroundColor = "rgb(173, 67, 48)";
        btn.style.color = "white";
      }
    },
  },
};
</script>

<style scoped>
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
}
.content .head {
  width: 100%;
  height: 50px;
  position: fixed;
  left: 0;
  top: 0;
  padding: 1% 5%;
  display: flex;
  box-sizing: border-box;
}
.content .head .logo {
  width: 30%;
  font-family: PlastoTrial_ExtraBold;
  font-size: 50px;
}
.content .head .right-btn {
  flex: 1;
}
.content .head .right-btn .into-home {
  float: right;
  line-height: 50px;
  font-family: PlastoTrial_ExtraBold;
  font-size: 20px;
  color: black;
  cursor: pointer;
  text-decoration: none;
}
.content .head .right-btn .link-other {
  float: right;
  margin-left: 3%;
  width: 150px;
  height: 50px;
  border: 0;
  background-color: rgb(254, 200, 135);
  border-radius: 8px;
  font-family: PlastoTrial_ExtraBold;
  font-size: 18px;
  cursor: pointer;
  transition: 0.5s;
}
.content .head .right-btn .link-other:hover {
  background-color: rgb(247, 178, 95);
}
.content .form-content {
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
}
.content .form-content::before {
  content: "";
  width: 465px;
  height: 650px;
  display: block;
  position: absolute;
  left: -550px;
  bottom: 10px;
  background-image: url(@/assets/bg_2.png);
  background-size: cover;
}
.content .form-content::after {
  content: "";
  width: 740px;
  height: 520px;
  display: block;
  position: absolute;
  right: -730px;
  bottom: 10px;
  background-image: url(@/assets/gb.png);
  background-size: cover;
}
.content .form-content .title {
  margin: 4% 0;
  font-family: PlastoTrial_ExtraBold;
}
.content .form-content .tips {
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
.content .form-content .forgot-pwd {
  width: 100%;
  margin-bottom: 6%;
  font-family: PlastoTrial_ExtraBold;
}
.content .form-content .forgot-pwd span {
  float: left;
  cursor: pointer;
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
.content .form-content .other-login {
  width: 100%;
  margin: 3%;
}
.content .form-content .other-login .divider {
  width: 100%;
  margin: 20px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}
.content .form-content .other-login .divider .line {
  width: 5%;
  display: inline-block;
  height: 1px;
  background-color: #000;
}
.content .form-content .other-login .divider .divider-text {
  font-family: PlastoTrial_ExtraBold;
  vertical-align: middle;
  margin: 0 10px;
  display: inline-block;
  color: #000;
  white-space: nowrap;
}
.content .form-content .other-login .other-login-wrapper {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.content .form-content .other-login .other-login-wrapper .other-login-item {
  width: 110px;
  height: 30px;
  padding: 10px;
  text-align: center;
  cursor: pointer;
  font-weight: 600;
  margin: 0 10px;
  transition: 0.5s;
  background-color: #fff;
  border-radius: 10px;
  border: 1px solid rgb(231, 231, 231);
}
.content .form-content .other-login .other-login-wrapper .other-login-item svg {
  width: 30px;
  height: 30px;
  fill: #000;
  vertical-align: middle;
}
.content
  .form-content
  .other-login
  .other-login-wrapper
  .other-login-item
  span {
  vertical-align: middle;
}
.content
  .form-content
  .other-login
  .other-login-wrapper
  .other-login-item:hover {
  background-color: #fff;
  border: 1px solid #000;
  box-shadow: 1px 10px 32px 1px rgba(186, 175, 221, 0.37);
}
.content
  .form-content
  .other-login
  .other-login-wrapper
  .other-login-item:hover
  svg {
  fill: #000;
}
.content .form-content .request {
  margin: 5% 0;
  font-family: PlastoTrial_ExtraLight;
}
.content .form-content .request span {
  font-weight: 900;
  cursor: pointer;
  font-family: PlastoTrial_ExtraBold;
  margin-left: 5px;
}
.content .form-content .Copyright {
  position: absolute;
  bottom: -50px;
  font-weight: 100;
} /*# sourceMappingURL=style.css.map */
</style>