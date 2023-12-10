<template>
  <div>
    <header :style="image" ref="hea">
      <div class="filter"></div>
      <div class="text">
        <span ref="text"></span><span v-show="bidding">_</span>
      </div>
      <footer>
        <svg
          class="waves"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M -160 44c30 0 58-18 88-18s58 18 88 18 58 -18 88-18 58 18 88 18 v 44 h -352 Z"
            />
          </defs>
          <g class="parallax">
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlink:href="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </footer>
    </header>
  </div>
</template>

<script>
export default {
  props: ["heigth"],
  data() {
    return {
      text: "Cold的窝",
      bidding: true,
      image: {
        backgroundImage: "url('http://imgapi.xl0408.top/index.php')",
        heigth: "100vh",
      },
    };
  },

  mounted() {
    window.setInterval(() => {
      this.bidding = !this.bidding;
    }, 500);

    let header = document.querySelector("header");
    let filter = document.querySelector(".filter");
    header.style.height = this.heigth + "vh";
    filter.style.height = this.heigth + "vh";

    let text = this.text;
    let index = 0;
    let intervalId = setInterval(() => {
      if (index < text.length) {
        let t = this.$refs.text;
        if (t) {
          index++;
          t.innerHTML = text.slice(0, index);
        }
      } else {
        clearImmediate(intervalId);
      }
    }, 350);
  },
  updated() {},
};
</script>

<style scoped>

header {
  max-width: 100vw;
  height: calc(100vh - 65px);
  position: relative;
  background-position: center;
  background-size: cover;
  transition: height 3s ease;
  filter: brightness(0.95);
}
header .text {
  position: absolute;
  top: 50%;
  left: 50%;
  color: white;
  font-size: 40px;
  text-shadow: 5px 5px 100px black;
  text-align: center;
  width: 300px;
  height: 80px;
  transform: translate(-50%, -50%);
  text-shadow: -1px 2px 10px black;
}
#bidding {
  visibility: "hidden";
}
footer {
  position: absolute;
  bottom: 1px;
  width: 100%;
  border-radius: 50%;
}
.waves {
  position: relative;
  width: 100%;
  height: 15vh;
  margin-bottom: -7px;
  min-height: 10px;
  max-height: 40px;
}
.parallax > use {
  animation: move-foreveer 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 16s;
}
@keyframes move-foreveer {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
.filter {
  position: absolute;
  width: 100%;
  height: calc(100vh - 65px);
  transition: height 3s ease;
  background: url("@/assets/bg.png");
}
</style>