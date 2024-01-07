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
      <div class="title">关于我</div>
      <div class="header">
        <div class="item">
          <span>你好，很高兴认识你 👋</span>
          <span>我英文名叫 TobyCold ❤️</span>
          <span>是一名 Java开发工程师，会点前端和前端框架Vue ✏️</span>
        </div>
        <div class="item">
          <span>源于</span>
          <span>热爱而去</span>
          <span class="item-span">感受</span>
          <span ref="item">{{ item }}</span>
        </div>
      </div>
      <div class="screen">{{ screen }}</div>
      <div>
        <div class="skill"></div>
        <div class="career"></div>
      </div>
    </div>
    <div class="footer">
      <div class="copyright">Copyright © 2018-2024 by TobyCold</div>
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
}
.about {
  width: 100%;
  height: 100%;
  .content {
    --color: white;
    --radius-value: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    .logo {
      position: relative;
      text-align: center;
      margin: 50px auto;
      display: flex;
      justify-content: center;
      .tag {
        color: var(--color);
        margin: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 1em;
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
    .header {
      color: var(--color);
      .item {
        background: linear-gradient(to bottom right, #000000bd, #ffffffce);
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
      .item:nth-child(2) {
        background: rgb(0, 0, 0);
        span {
          border-radius: var(--radius-value);
          z-index: 99;
          background-color: rgb(0, 0, 0);
        }
        span:nth-last-child(1) {
          z-index: 1;
        }
      }
    }
    .screen {
      color: var(--color);
      display: flex;
      justify-content: center;
      align-items: center;
      height: 200px;
      border-radius: var(--radius-value);
      background: #1d1e22d0;
      text-align: center;
      font-size: 6em;
      font-family: 寒蝉点阵体;
    }
    .skill {
      height: 200px;
    }
    .career {
      height: 100px;
    }
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
    visibility: hidden;
  }
  .content {
    margin: 30px;
    > div {
      margin: 10px;
    }
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
      height: 400px;
      gap: 10px;
      .item {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        width: 100%;
        height: 100%;
      }
    }
  }
}
//大屏
@media screen and (min-width: 1000px) {
  .content {
    margin: 30px;
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
      margin: 20px;
      gap: 30px;
      .item {
        display: flex;
        flex-direction: column;
        width: 100%;
      }
      .item:nth-child(1) {
        width: 140%;
      }
    }
    .screen {
      height: 220px;
    }
  }
}
</style>