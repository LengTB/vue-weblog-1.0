<template>
  <div>
    <div class="card" v-show="card.name != null">
      <div class="logo">
        <img :src="card.avatar" alt="" />
        <div class="transition"></div>
      </div>
      <div class="name">
        <span @click="$message.info('关于我的秘密，你想知道，我就不告诉你！')">{{ card.name }}</span>
        <img :src="grade" alt="" />
      </div>
      <div class="admin" v-show="admin"></div>
      <div class="logion" @click="$message.info('咋，你觉得很下头吗！')">{{ card.signature }}</div>
      <div class="message">
        <div class="item" @click="$message.info('功能尚未开发完成，敬请期待！')">
          <div>{{card.commentCount}}</div>
          <div>评论数</div>
        </div>
        <div class="item" @click="$message.info('功能尚未开发完成，敬请期待！')">
          <div>{{card.tagCount}}</div>
          <div>文章数</div>
        </div>
        <div class="item" @click="$message.info('功能尚未开发完成，敬请期待！')">
          <div>{{card.likeCount}}</div>
          <div>点赞数</div>
        </div>
      </div>
      <div class="about">
        <div class="github">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click="clickInfo('github')"
          >
            <title>GitHub</title>
            <path
              d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            />
          </svg>
        </div>
        <div class="qq">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click="clickInfo('qq')"
          >
            <title>Tencent QQ</title>
            <path
              d="M21.395 15.035a39.548 39.548 0 0 0-.803-2.264l-1.079-2.695c.001-.032.014-.562.014-.836C19.526 4.632 17.351 0 12 0S4.474 4.632 4.474 9.241c0 .274.013.804.014.836l-1.08 2.695a38.97 38.97 0 0 0-.802 2.264c-1.021 3.283-.69 4.643-.438 4.673.54.065 2.103-2.472 2.103-2.472 0 1.469.756 3.387 2.394 4.771-.612.188-1.363.479-1.845.835-.434.32-.379.646-.301.778.343.578 5.883.369 7.482.189 1.6.18 7.14.389 7.483-.189.078-.132.132-.458-.301-.778-.483-.356-1.233-.646-1.846-.836 1.637-1.384 2.393-3.302 2.393-4.771 0 0 1.563 2.537 2.103 2.472.251-.03.581-1.39-.438-4.673zM12.662 4.846c.039-1.052.659-1.878 1.385-1.846s1.281.912 1.242 1.964c-.039 1.051-.659 1.878-1.385 1.846s-1.282-.912-1.242-1.964zM9.954 3c.725-.033 1.345.794 1.384 1.846.04 1.052-.517 1.931-1.242 1.963-.726.033-1.346-.794-1.385-1.845C8.672 3.912 9.228 3.033 9.954 3zM7.421 8.294c.194-.43 2.147-.908 4.566-.908h.026c2.418 0 4.372.479 4.566.908a.14.14 0 0 1 .014.061c0 .031-.01.059-.026.083-.163.238-2.333 1.416-4.553 1.416h-.026c-2.221 0-4.39-1.178-4.553-1.416a.136.136 0 0 1-.014-.144zm10.422 8.622c-.22 3.676-2.403 5.987-5.774 6.021h-.137c-3.37-.033-5.554-2.345-5.773-6.021-.081-1.35.001-2.496.147-3.43.318.063.638.122.958.176v3.506s1.658.334 3.318.103v-3.225c.488.027.96.04 1.406.034h.025c1.678.021 3.714-.204 5.683-.594.146.934.227 2.08.147 3.43zM10.48 5.804c.313-.041.542-.409.508-.825-.033-.415-.314-.72-.629-.679-.313.04-.541.409-.508.824.034.417.315.72.629.68zM14.479 5.156c.078.037.221.042.289-.146.035-.095.025-.165-.009-.214-.023-.033-.133-.118-.371-.176-.904-.22-1.341.384-1.405.499-.04.072-.012.176.056.227.067.051.139.037.179-.006.58-.628 1.21-.208 1.261-.184z"
            />
          </svg>
        </div>
        <div class="bilibili">
          <svg
            role="img"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            @click="clickInfo('bilibili')"
          >
            <title>Bilibili</title>
            <path
              d="M17.813 4.653h.854c1.51.054 2.769.578 3.773 1.574 1.004.995 1.524 2.249 1.56 3.76v7.36c-.036 1.51-.556 2.769-1.56 3.773s-2.262 1.524-3.773 1.56H5.333c-1.51-.036-2.769-.556-3.773-1.56S.036 18.858 0 17.347v-7.36c.036-1.511.556-2.765 1.56-3.76 1.004-.996 2.262-1.52 3.773-1.574h.774l-1.174-1.12a1.234 1.234 0 0 1-.373-.906c0-.356.124-.658.373-.907l.027-.027c.267-.249.573-.373.92-.373.347 0 .653.124.92.373L9.653 4.44c.071.071.134.142.187.213h4.267a.836.836 0 0 1 .16-.213l2.853-2.747c.267-.249.573-.373.92-.373.347 0 .662.151.929.4.267.249.391.551.391.907 0 .355-.124.657-.373.906zM5.333 7.24c-.746.018-1.373.276-1.88.773-.506.498-.769 1.13-.786 1.894v7.52c.017.764.28 1.395.786 1.893.507.498 1.134.756 1.88.773h13.334c.746-.017 1.373-.275 1.88-.773.506-.498.769-1.129.786-1.893v-7.52c-.017-.765-.28-1.396-.786-1.894-.507-.497-1.134-.755-1.88-.773zM8 11.107c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c0-.373.129-.689.386-.947.258-.257.574-.386.947-.386zm8 0c.373 0 .684.124.933.373.25.249.383.569.4.96v1.173c-.017.391-.15.711-.4.96-.249.25-.56.374-.933.374s-.684-.125-.933-.374c-.25-.249-.383-.569-.4-.96V12.44c.017-.391.15-.711.4-.96.249-.249.56-.373.933-.373Z"
            />
          </svg>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  /**
   * 参数：
   * name           名称
   * signature      个性签名
   */
  props: ["card"],
  data() {
    return {
      //这是获取qq头像的api
      grades: [
        require("@/assets/grade/0.avif"),
        require("@/assets/grade/1.avif"),
        require("@/assets/grade/2.avif"),
        require("@/assets/grade/3.avif"),
        require("@/assets/grade/4.avif"),
        require("@/assets/grade/5.avif"),
        require("@/assets/grade/6.avif"),
        require("@/assets/grade/7.avif"),
        require("@/assets/grade/8.avif"),
        require("@/assets/grade/9.avif"),
      ],
    };
  },
  methods:{
    clickInfo(name) {
    if(name === 'qq'){
      location.href  =  this.card.qq;
    }else if(name === 'github'){
      location.href  =  this.card.github;
    }else if(name === 'bilibili'){
      location.href  =  this.card.bilibili;
    }else{
      this.$notify.error({
        title: '错误',
        message: '未知的链接',
      });
    }
    },
  },
  mounted() {
    //这里从仓库拿qq来渲染头像
    this.logoUrl = this.logoUrl + this.$store.state.qq;
  },

  //计算属性，动态渲染
  computed: {
    admin() {
      return this.card.admin;
    },
    grade() {
      return this.grades[this.card.grade];
    },
  },

  created(){
    
  }
};
</script>
<style lang="less" scoped>
.admin {
  width: 100%;
  height: 35px;
  margin: 10px;
  background: url("@/assets/grade/common_1_usergroup_icon.gif") no-repeat;
  background-size: contain;
  background-position: center;
}
.card {
  background-color: rgb(255, 255, 255);
  width: 300px;
  margin: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;
  font-family: YeZiGongChangAoYeHei;
}
.card .logo {
  width: 100%;
  background-image: url(@/assets/icon/bg.gif);
  background-size: cover;
  background-position: center;
  padding-top: 100px;
}
.card .logo img {
  position: relative;
  top: 20px;
  border-radius: 50px;
  display: block;
  height: 88px;
  margin: auto;
}

.card .name {
  font-size: 20px;
  color: rgb(12, 158, 255);
  text-shadow: 0 1px 13px #17c9e9;
  margin-top: 18px;
  margin-bottom: 10px;
}
.card .name img {
  background-color: white;
  width: 27px;
  position: absolute;
  margin-top: 5px;
  margin-left: 8px;
}
.card .logion {
  font-size: 15px;
  margin: 10px 0;
}
.about > * {
  width: 26px;
  height: 26px;
}
.about > *:hover {
  filter: blur(1px);
}
.about {
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 20px;
}
.message {
  width: 80%;
  display: flex;
  text-align: center;
  flex-direction: row;
  justify-content: space-evenly;
  border-bottom: 1px solid #ccc;
  .item :nth-child(1) {
    font-size: 18px;
    cursor: not-allowed;
  }

  .item :nth-child(2) {
    font-size: 11px;
  }
  .item > * {
    margin: 10px 0px;
  }
}

.transition {
  z-index: 999;
  height: 20px;
  background: linear-gradient(rgb(0, 0, 0), rgb(255, 255, 255));
}
</style>