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
            <span v-for="item in skills" :key="item" class="item">
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
          <span>数据</span>
          <span>访问统计</span>
        </div>
        <div class="access-item">
          <div class="location">
            <span>我现在住在中国，九江市</span>
          </div>
          <div class="info">开发中</div>
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
// import MyImageTop from "@/components/HomeImage.vue";
export default {
  name: "ColdAbout",
  data() {
    return {
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
    // MyImageTop,
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
  },
};
</script>

<style lang="less" scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url("@/assets/bg/像素风-玛丽亚.jpg");
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.about {
  width: 100%;
  height: 100%;
  font-family: Cubic;
  .content {
    --color: white;
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
        background-color: var(--color);
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
      color: var(--color);
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
      color: var(--color);
      align-items: center;
      border-radius: var(--radius-value);
      background: #2129bdb7;
      text-align: center;
      font-family: 寒蝉点阵体;
    }
    .skill {
      display: flex;
      gap: 10px;
    }
    .access {
      display: flex;
      gap: 10px;
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
          padding: 10px;
          background-color: rgba(92, 92, 91, 0.301);
          backdrop-filter: blur(10px);
        }
      }
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

//小屏
@media screen and (max-width: 1000px) {
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
      color: #bcbcbd;
      flex-direction: column;
      div {
        //
        border-radius: var(--radius-value);
        background: var(--background);
        border: 1px solid #42444a;
      }
      .skill-item:nth-child(1) {
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
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
          .item {
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
        height: 200px;
        background-color: var(--background);
        border-radius: 20px;
        border: 1px solid #42444a;
      }
      .access-item:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 200px;
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
@media screen and (min-width: 1000px) {
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
      font-size: 5em;
      height: 220px;
    }
    .skill {
      height: 300px;
      color: #bcbcbd;
      div {
        padding: 10px;
        width: 100%;
        border-radius: var(--radius-value);
        background: var(--background);
        border: 1px solid #42444a;
      }
      .skill-item:nth-child(1) {
        display: flex;
        flex-direction: column;
        gap: 10px;
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
          .item {
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
      height: 200px;
      .access-item {
        width: 100%;
      }
      .access-item:nth-child(1) {
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
          background-color: #ccc;
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
      gap: 20px;
      a {
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 30px;
        color: white;
        font-size: 0.9em;
        text-decoration: none;
      }
      a:hover {
        border-radius: 20px;
        color: rgb(34, 137, 255);
        background-color: #bd8634d3;
        font-size: 0.9em;
        text-decoration: none;
      }
    }
  }
}
</style>