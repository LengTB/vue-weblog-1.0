<template>
  <div class="about">
    <div class="bg"></div>
    <HomeTop :a="index" :color="'rgba(255, 255, 255, 0.2)'"></HomeTop>
    <div class="content">
      <div class="logo">
        <div class="left tag">
          <span>🤖️ 数码科技爱好者</span>
          <span>🔍 分享与热心帮助</span>
          <span>🏠 智能家居小能手</span>
          <span>🔨 设计开发一条龙</span>
        </div>
        <img
          ref="img"
          :class="hover ? 'img-hover' : ''"
          src="@/assets/icon/彩色裸底（logo放大版）.png"
          alt=""
          @focus="hoverImg"
        />
        <div class="tag right">
          <span>专修交互与设计 🤝</span>
          <span>脚踏实地行动派 🏃</span>
          <span>团队小组发动机 🧱</span>
          <span>壮汉人狠话不多 💢</span>
        </div>
        <div ref="status" class="status"></div>
      </div>
      <div class="title">关于我✨</div>
      <div class="header">
        <div class="header-item">
          <span>你好，很高兴认识你 👋</span>
          <span>我英文名叫 TobyCold ❤️</span>
          <span>是一名 Java开发工程师，会点前端和前端框架Vue ✏️</span>
        </div>
        <div class="header-item">
          <span>动力源于</span>
          <span>热爱而去</span>
          <span class="item-span">感受</span>
          <span ref="item">{{ item }}</span>
        </div>
      </div>
      <div class="screen">{{ screen }}</div>
      <div class="skill">
        <div class="skill-item">
          <span class="item">技能</span>
          <span class="item">开启创造力</span>
          <span class="item">
            <span v-for="item in skills" :key="item" class="si">
              <img :src="item.img" alt="" />
              <span>{{ item.value }}</span>
            </span>
          </span>
        </div>
        <div class="skill-item">
          <span class="item">生涯</span>
          <span class="item">无限进步</span>
          <span class="item">EDU，江西软件职业技术大学</span>
        </div>
      </div>
      <div class="access">
        <div class="access-item">
          <span class="ai">数据</span>
          <span class="ai">访问统计</span>
          <span class="ai">
            <div>
              <span>今日到访人数</span>
              <span>100</span>
              <span>今日到访人数</span>
              <span>100</span>
              <span>今日到访人数</span>
              <span>100</span>
            </div>
            <div>
              <span>今日到访人数</span>
              <span>100</span>
              <span>今日到访人数</span>
              <span>100</span>
              <span>今日到访人数</span>
              <span>100</span>
            </div>
          </span>
        </div>
        <div class="access-item">
          <div class="location">
            <span>我现在住在中国，九江市</span>
          </div>
          <div class="info">
            <div class="info-item">
              <span>出生于</span>
              <span style="color: #43a6c6">2002</span>
            </div>
            <div class="info-item">
              <span @click="clickInfo">江西软件职业技术大学</span>
              <span style="color: #8728aa">信息技术学院</span>
            </div>
            <div class="info-item">
              <span>现在职业</span>
              <span style="color: #c69043">大三学生👨‍🎓</span>
            </div>
          </div>
        </div>
      </div>
      <div class="journey">
        <v-md-editor
          class="journey-item"
          style="background: rgba(0, 0, 0, 0.637); border-radius: 20px"
          v-model="text"
          mode="preview"
          right-toolbar="preview"
          default-show-toc="true"
        ></v-md-editor>
      </div>
      <div class="acknowledgment">
        <div>
          <span class="left">
            <span>致谢</span>
            <span>赞赏名单 </span>
            <span>感谢因为有你们，让我更加有创作的动力</span>
          </span>
          <span class="right"></span>
        </div>
        <div class="list">
          <span class="i"></span>
          <span class="i"></span>
          <span class="i"></span>
          <span class="i"></span>
          <span class="i"></span>
        </div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">Copyright © 2023-2024 by TobyCold</div>
      <div class="links">
        <a href="#">订阅</a>
        <a href="#">主题</a>
        <a href="#">联系我</a>
        <a href="#"> 赣ICP备2022010266号-3</a>
        <a href="#">赣公网安备36042302000157号</a>
        <a href="#">开源协议</a>
      </div>
    </div>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
export default {
  name: "ColdAbout",
  data() {
    return {
      text: "#### 心路历程 \n- [ ] Task ",
      index: 1,
      hover: false,
      item: "生活",
      screen: "Hello World",
      skills: [
        {
          value: "java",
          img: require("@/assets/skills/java.png"),
        },
        {
          value: "vue",
          img: require("@/assets/skills/Vue.png"),
        },
        {
          value: "spring",
          img: require("@/assets/skills/Spring.png"),
        },
        {
          value: "python",
          img: require("@/assets/skills/python.png"),
        },
        {
          value: "c++",
          img: require("@/assets/skills/c++.png"),
        },
        {
          value: "ps",
          img: require("@/assets/skills/Photoshop.png"),
        },
        {
          value: "pr",
          img: require("@/assets/skills/Premiere Pro.png"),
        },
        {
          value: "html",
          img: require("@/assets/skills/html.png"),
        },
        {
          value: "css",
          img: require("@/assets/skills/CSS3.png"),
        },
        {
          value: "js",
          img: require("@/assets/skills/javascript.png"),
        },
        {
          value: "node",
          img: require("@/assets/skills/Node.js.png"),
        },
        {
          value: "react",
          img: require("@/assets/skills/React.png"),
        },
        {
          value: "git",
          img: require("@/assets/skills/git.png"),
        },
        {
          value: "mysql",
          img: require("@/assets/skills/MySQL.png"),
        },
        {
          value: "docker",
          img: require("@/assets/skills/docker.png"),
        },
      ],
    };
  },
  components: {
    HomeTop,
  },
  mounted() {
    let currentIndex = 0;
    let arrays = ["科技", "幸福", "生活"];
    let transition = ["translate-up", "translate-right"];
    let item = this.$refs.item;
    setInterval(() => {
      item.classList.add(transition[currentIndex % 2]);
      setTimeout(() => {
        this.item = arrays[currentIndex];
        item.classList.remove(transition[currentIndex % 2]);
        //随机颜色
        item.style.color =
          "rgba(" +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          Math.floor(Math.random() * 255) +
          "," +
          "1" +
          ")";
        currentIndex = (currentIndex + 1) % arrays.length; //循环索引，超过数组长度时返回0
      }, 1000);
    }, 2000);
  },
  methods: {
    hoverImg() {
      this.hover = true;
    },
    clickInfo() {
      location.replace("https://www.jxuspt.com/Aheadedu.html");
    },
  },
};
</script>

<style lang="less" scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/bg/about.jpg");
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.about {
  width: 100%;
  height: 100%;
  font-family: Cubic;
  .content {
    --color: #b9bec0;
    --background: rgba(0, 0, 0, 0.637);
    --radius-value: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 20px;
    .logo {
      display: flex;
      justify-content: center;
      position: relative;
      text-align: center;
      margin: 50px auto;
      .tag {
        color: var(--color);
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 0.8em;
        font-weight: 600;
        font-family: cubic;
        span {
          padding: 5px;
          margin: 5px;
          border: 1px solid #ccc;
          border-radius: var(--radius-value);
          transform: translateY(5px);
          background-color: rgba(0, 0, 0, 0.534);
        }
        --delay: 10s;
        span:nth-child(1) {
          animation: item-re-xy var(--delay) ease infinite;
        }
        span:nth-child(2) {
          animation: item-re-xy var(--delay) ease 0.8s infinite;
        }
        span:nth-child(3) {
          animation: item-re-xy var(--delay) ease 1.6s infinite;
        }
        span:nth-child(4) {
          animation: item-re-xy var(--delay) ease 2.4s infinite;
        }
      }
      .left {
        span:nth-child(1) {
          position: relative;
          left: 10px;
        }
        span:nth-child(4) {
          position: relative;
          left: 10px;
        }
      }
      .right {
        span:nth-child(1) {
          position: relative;
          right: 10px;
        }
        span:nth-child(4) {
          position: relative;
          right: 10px;
        }
      }
      img {
        object-fit: fill;
        background-color: white;
        border-radius: 200px;
      }
      .status {
        position: absolute;
        background-color: rgb(101, 250, 15);
        border: 5px #2b2b2b solid;
        border-radius: 100px;
      }
      .img-hover {
        width: 220px;
        height: 220px;
      }
      .status-hover {
        width: 200px;
        height: 200px;
      }
    }
    .title {
      text-align: center;
      font-family: 寒蝉点阵体;
      text-shadow: 1px 1px 2px #2b2b2b, 0 0 1em #2b2b2b, 0 0 1.2em #2b2b2b;
      font-size: 2em;
      color: white;
    }
    .header {
      color: white;
      .header-item {
        border-radius: var(--radius-value);
        font-family: cubic;
        padding: 20px;
        border: 1px solid #42444a;
        span {
          padding: 10px;
          transition: transform 0.5s ease-in-out;
          backface-visibility: hidden;
        }
        span:nth-child(even) {
          font-size: 2em;
        }
      }
      .header-item:nth-child(1) {
        background: linear-gradient(to bottom right, #9942fcdc, #2194ffec);
      }
      .header-item:nth-child(2) {
        color: var(--color);
        background: var(--background);
        span {
          border-radius: var(--radius-value);
          z-index: 99;
        }
        span:nth-last-child(1) {
          z-index: 1;
        }
      }
    }
    .screen {
      display: flex;
      justify-content: center;
      border: 1px solid #42444a;
      color: white;
      align-items: center;
      border-radius: var(--radius-value);
      background: #2129bdb7;
      text-align: center;
      font-family: 寒蝉点阵体;
    }
    .skill {
      display: flex;
      gap: 10px;
      color: var(--color);
      .skill-item {
        display: flex;
        gap: 20px;
        padding: 10px;
        width: 100%;
        border-radius: var(--radius-value);
        background: var(--background);
        border: 1px solid #42444a;
      }
    }
    .access {
      display: flex;
      gap: 10px;

      .access-item:nth-child(1) {
        color: var(--color);
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        border-radius: 20px;
        border: 1px solid #42444a;
        padding: 10px;
        gap: 10px;
        .ai:nth-child(3) {
          padding: 10px;
          display: flex;
          gap: 150px;
          div {
            display: flex;
            gap: 5px;
            flex-direction: column;
            span:nth-child(odd) {
              font-size: 0.2em;
            }
            span:nth-child(even) {
              font-size: 2.5em;
            }
          }
          div:nth-child(1) {
            width: 70%;
          }
          div:nth-child(2) {
            width: 100%;
          }
        }
        .ai:nth-child(2) {
          font-size: 2em;
        }
      }
      .access-item:nth-child(2) {
        .location:hover {
          animation: location-xy 5s ease forwards;
          span {
            visibility: location-y;
            animation: location-y 1s ease-in-out forwards;
          }
        }
        @keyframes location-y {
          from {
            filter: opacity(1);
          }
          to {
            filter: opacity(0);
          }
        }
        @keyframes location-xy {
          from {
            background-size: 100%;
          }
          to {
            background-size: 130%;
          }
        }
        .location {
          transition: all 2s ease;
          display: flex;
          align-items: flex-end;
          width: 100%;
          border-radius: 20px;
          border: 1px solid #42444a;
          height: 130%;
          background-image: url("@/assets/bg/map.jpg");
          background-size: cover;
          background-position: center;
          span {
            color: #b9bec0;
            border-radius: 0 0 20px 20px;
            border: 1px solid #42444a 0 0 0;
            width: 100%;
            padding: 20px;
            background-color: rgba(92, 92, 91, 0.301);
            backdrop-filter: blur(10px);
          }
        }
        .info {
          color: var(--color);
          display: flex;
          justify-content: space-evenly;
          align-items: center;
          background-color: var(--background);
          span {
            display: block;
            margin: 10px;
          }
          span:nth-child(1) {
            font-size: 0.5em;
          }
          span:nth-child(2) {
            font-size: 1.5em;
          }
        }
      }
    }
    .journey {
      color: var(--color);
      font-family: Cubic;
      border-radius: 20px;
      border: 1px solid #42444a;
    }
  }
  .footer {
    font-family: Cubic;
    color: white;
    background: linear-gradient(#5371e9c7, #3e63f8a1);
  }
}
.translate-up {
  transform: rotateX(180deg);
}

.translate-right {
  transform: rotateY(180deg);
}
@keyframes item-re-xy {
  0% {
    transform: translateY(5px);
  }
  25% {
    transform: translateY(-5px);
  }
  50% {
    transform: translateY(5px);
  }
  75% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(5px);
  }
}

// 小屏
@media screen and (max-width: 850px) {
  .tag {
    span {
      display: none;
    }
  }
  .content {
    margin: 30px;
    .logo {
      img {
        width: 150px;
        height: 150px;
      }
      .status {
        width: 12px;
        height: 12px;
        padding: 5px;
        top: 118px;
        margin-left: 100px;
      }
    }

    .header {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: stretch;
      gap: 10px;
      .header-item {
        display: flex;
        flex-direction: column;
        height: 100%;
      }
    }
    .screen {
      height: 200px;
      font-size: 3em;
    }
    .skill {
      flex-direction: column;
      .skill-item:nth-child(1) {
        padding: 10px;
        flex-direction: column;
        .item:nth-child(2) {
          font-size: 2em;
        }
        .item:nth-child(3) {
          margin-top: 10px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          color: #b6b6b6;
          gap: 5px;
          img {
            padding: 5px;
            height: 20px;
            border-radius: 20px;
            background: white;
          }
          .si {
            background-color: #070707;
            padding: 3px 5px;
            height: 30px;
            gap: 10px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 0.8em;
            border-radius: 20px;
            border: 1px solid #ccc;
          }
        }
      }
      .skill-item:nth-child(2) {
        padding: 10px;
        display: flex;
        flex-direction: column;
        .item:nth-child(2) {
          font-size: 2em;
        }
        .item:nth-child(3) {
          margin: 10px 0;
        }
        .item:nth-child(3)::before {
          position: relative;
          bottom: 2.5px;
          font-size: 8px;
          content: "***";
          margin-right: 10px;
          background-color: #357ef5;
          color: #357ef5;
          border-radius: 100px;
        }
      }
    }
    .access {
      color: #bcbcbd;
      flex-direction: column;
      .access-item:nth-child(1) {
        padding: 10px;
        display: flex;
        flex-direction: column;
        background-color: var(--background);
        border-radius: 20px;
        border: 1px solid #42444a;
      }
      .access-item:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 300px;
        .location {
          background-color: var(--background);
          border-radius: 20px;
        }
        .info {
          background-color: var(--background);
          border-radius: 20px;
          padding: 10px;
        }
      }
    }
  }
  .footer {
    .copyright {
      padding: 10px;
      text-align: center;
    }
    .links {
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 20px;
      a {
        color: white;
        font-size: 0.9em;
        text-decoration: none;
      }
      a:hover {
        color: rgb(34, 137, 255);
        font-size: 0.9em;
        text-decoration: none;
      }
    }
  }
}
//大屏
@media screen and (min-width: 850px) {
  .content {
    margin: 20px 120px;
    align-items: center;
    > div {
      width: 100%;
    }
    .logo {
      img {
        width: 200px;
        height: 200px;
      }
      .status {
        bottom: 0px;
        width: 20px;
        height: 20px;
        padding: 5px;
        top: 150px;
        margin-left: 140px;
      }
    }
    .header {
      display: flex;
      height: 220px;
      justify-content: center;
      align-items: stretch;
      gap: 30px;
      .header-item {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .header-item:nth-child(1) {
        width: 140%;
      }
    }
    .screen {
      font-size: 10em;
      height: 220px;
      overflow: hidden;
    }
    .skill {
      .skill-item:nth-child(1):hover {
        .item:nth-child(3) {
          height: 190px;
          animation: none;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          color: var(--color);
          gap: 10px;
          overflow: clip;
          .si {
            img {
              padding: 5px;
              height: 20px;
              border-radius: 20px;
              background: white;
            }
            background-color: #070707;
            padding: 3px 5px;
            gap: 10px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            font-size: 1em;
            border-radius: 20px;
            border: 1px solid #ccc;
          }
        }
      }
      .skill-item:nth-child(1) {
        flex-direction: column;
        overflow: hidden;
        .item:nth-child(2) {
          font-size: 2em;
        }
        .item:nth-child(3) {
          height: 190px;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 10px;
          animation: item-x 60s linear infinite normal;
          .si {
            position: relative;
            img {
              height: 80px;
              padding: 5px;
              background-color: white;
              border-radius: 20px;
            }
            display: flex;
            align-items: center;
            font-size: 0;
          }
          @keyframes item-x {
            from {
              transform: translate3d(-10%, 0, 0);
            }
            to {
              transform: translate3d(100%, 0, 0);
            }
          }
        }
      }
      .skill-item:nth-child(2) {
        display: flex;
        gap: 10px;
        flex-direction: column;
        .item:nth-child(2) {
          font-size: 2em;
        }
        .item:nth-child(3) {
          margin: 10px 0;
        }
        .item:nth-child(3)::before {
          position: relative;
          bottom: 2.5px;
          font-size: 8px;
          content: "***";
          margin-right: 10px;
          background-color: #357ef5;
          color: #357ef5;
          border-radius: 100px;
        }
      }
    }
    .access {
      .access-item {
        width: 100%;
      }
      .access-item:nth-child(1) {
        width: 70%;
        border-radius: 20px;
        border: 1px solid #42444a;
        background-color: #ccc;
      }
      .access-item:nth-child(2) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-evenly;
        gap: 10px;
        .info {
          width: 100%;
          border-radius: 20px;
          border: 1px solid #42444a;
          height: 100%;
        }
      }
    }
  }
  .footer {
    display: flex;
    height: 100px;
    padding: 0 25px;
    align-items: center;
    justify-content: space-between;
    .copyright {
      text-align: center;
    }
    .links {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      a {
        padding: 5px 10px;
        color: white;
        font-size: 0.9em;
        text-decoration: none;
      }
      a:hover {
        border-radius: 15px;
        color: rgb(34, 137, 255);
        background-color: #bd8634d3;
        font-size: 0.9em;
        text-decoration: none;
      }
    }
  }
}
</style>