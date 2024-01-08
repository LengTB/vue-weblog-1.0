<template>
  <div class="newyear">
    <HomeTop class="top"></HomeTop>
    <div class="body">
      <video
        :src="timeLeft == null ? videos[1] : videos[0]"
        autoplay
        loop
      ></video>
      <div id="snowflake-container">
        <!-- 雪花将使用Vue动态渲染 -->
        <div
          v-for="snowflake in snowflakes"
          :key="snowflake.id"
          :style="snowflake.style"
          class="snowflake"
        >
          ❄
        </div>
        <div class="title">
          <div class="countdown-container">
            <div v-if="timeLeft">
              <h1>新年倒计时</h1>
              <p>距离新年还有：</p>
              <div class="countdown">
                <span>{{ timeLeft.days }}天</span>
                <span>{{ timeLeft.hours }}小时</span>
                <span>{{ timeLeft.minutes }}分钟</span>
                <span>{{ timeLeft.seconds }}秒</span>
              </div>
            </div>
            <div v-else>
              <h1>新年快乐！</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer">
      <span>Copyright © 2023-2024 by TobyCold</span>
    </div>
  </div>
</template>

<script>
import HomeTop from "@/components/HomeTop.vue";
export default {
  name: "ColdDemo1",
  data() {
    return {
      snowflakes: [],
      timer: null,
      timeLeft: null,
      videos: [
        require("@/assets/mp4/夜空.mp4"),
        require("@/assets/mp4/烟花.mp4"),
      ],
      video: "",
    };
  },
  created() {
    this.snowflakeInterval = setInterval(this.addSnowflake, 200);

    this.calculateTimeLeft();
    this.timer = setInterval(this.calculateTimeLeft, 1000);
  },
  beforeDestroy() {
    clearInterval(this.snowflakeInterval);
    this.snowflakes = [];

    clearInterval(this.timer);
  },
  methods: {
    addSnowflake() {
      const id = Math.random().toString(36).substr(2, 9);
      const size = Math.random() * 0.5 + 0.5;
      const left = Math.random() * 100;
      const duration = Math.random() * 3 + 2;
      const delay = Math.random() * 5;
      const snowflake = {
        id,
        style: {
          left: `${left}vw`,
          opacity: Math.random(),
          transform: `scale(${size})`,
          animationDuration: `${duration}s`,
          animationDelay: `-${delay}s`,
        },
      };
      this.snowflakes.push(snowflake);
      setTimeout(() => {
        this.removeSnowflake(id);
      }, (duration + delay) * 1000);
    },
    removeSnowflake(id) {
      this.snowflakes = this.snowflakes.filter(
        (snowflake) => snowflake.id !== id
      );
    },

    calculateTimeLeft() {
      const now = new Date();
      const newYear = new Date(2024, 1, 10);
      const difference = newYear - now;

      if (difference <= 0) {
        clearInterval(this.timer);
        this.timeLeft = null;
      } else {
        this.timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        };
      }
    },
  },
  components: {
    HomeTop,
  },
};
</script>

<style lang="less" scoped>
.newyear {
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
video {
  position: relative;
  width: 100%;
  object-fit: cover;
}

@media screen and (max-width: 400px) {
  .newyear {
    position: relative;
      width: 100vw;
      height: 100vh;
  }
}
#snowflake-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}
.snowflake {
  position: absolute;
  top: -10px;
  color: #ffffff;
  user-select: none;
  font-size: 2em;
}
@keyframes fall {
  0% {
    top: -10vh;
  }
  100% {
    top: 100vh;
  }
}
.snowflake {
  animation-name: fall;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
}

.title {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: Cubic;
  font-weight: bold;
  justify-content: center;
  align-items: center;
  color: #fde248;
  text-shadow: 1px 1px 2px #ff0202, 0 0 1em #FAFAD2, 0 0 1.2em #FAFAD2;
}
.countdown-container {
  font-size: 2.5em;
  text-align: center;
  animation: hides 2s ease-out;
}

@keyframes hides {
  from {
    font-size: 0;
  }
  to {
    font-size: 2.5em;
  }
}
.top{
  position: absolute;
  width: 100%;
  z-index: 1;
}
.countdown {
  font-size: 1.5em;
  margin: 20px 0;
}

.countdown span:not(:last-child):after {
  content: ":";
  margin: 0 10px;
}
.footer{
  position: absolute;
  width: 100%;
  color: rgb(255, 255, 255);
  height: 20px;
  font-family: 寒蝉点阵体;
  bottom: 10px;
  text-align: center;
}
</style>