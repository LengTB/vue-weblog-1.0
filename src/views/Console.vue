<template>
  <div class="main">
    <div class="left">
      <img src="@/assets/logo.jpg" alt="logo" />
      <router-link to="/" class="item">仪表盘</router-link>
      <div style="margin: 5px 0 5px -180px; font-size: 14px; color: #847e7e">
        <span>用户</span>
      </div>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">文章</span>
        </div>
      </router-link>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">页面</span>
        </div></router-link
      >
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M2 8.994A5.99 5.99 0 0 1 8 3h8c3.313 0 6 2.695 6 5.994V21H8c-3.313 0-6-2.695-6-5.994V8.994zM20 19V8.994A4.004 4.004 0 0 0 16 5H8a3.99 3.99 0 0 0-4 3.994v6.012A4.004 4.004 0 0 0 8 19h12zm-6-8h2v2h-2v-2zm-6 0h2v2H8v-2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">评论</span>
        </div></router-link
      >
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M12.414 5H21a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h7.414l2 2zM20 11H4v8h16v-8zm0-2V7h-8.414l-2-2H4v4h16z"
            ></path>
          </svg>
          <span style="margin-left: 5px">附件</span>
        </div></router-link
      >
      <!-- 断点 -->
      <div style="margin: 5px 0 5px -180px; font-size: 14px; color: #847e7e">
        <span>外观</span>
      </div>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M2 3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993H2.992A.993.993 0 0 1 2 20.007V3.993zM11 5H4v14h7V5zm2 0v14h7V5h-7zm1 2h5v2h-5V7zm0 3h5v2h-5v-2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">文章</span>
        </div>
      </router-link>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M5 8v12h14V8H5zm0-2h14V4H5v2zm15 16H4a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1zM7 10h4v4H7v-4zm0 6h10v2H7v-2zm6-5h4v2h-4v-2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">页面</span>
        </div></router-link
      >
      <!-- 断点 -->
      <div style="margin: 5px 0 5px -180px; font-size: 14px; color: #847e7e">
        <span>系统</span>
      </div>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M13 18v2h6v2h-6a2 2 0 0 1-2-2v-2H8a4 4 0 0 1-4-4V7a1 1 0 0 1 1-1h2V2h2v4h6V2h2v4h2a1 1 0 0 1 1 1v7a4 4 0 0 1-4 4h-3zm-5-2h8a2 2 0 0 0 2-2v-3H6v3a2 2 0 0 0 2 2zm10-8H6v1h12V8zm-6 6.5a1 1 0 1 1 0-2a1 1 0 0 1 0 2zM11 2h2v3h-2V2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">插件</span>
        </div>
      </router-link>
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M12 14v2a6 6 0 0 0-6 6H4a8 8 0 0 1 8-8zm0-1c-3.315 0-6-2.685-6-6s2.685-6 6-6s6 2.685 6 6s-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4s-4 1.79-4 4s1.79 4 4 4zm2.595 7.812a3.51 3.51 0 0 1 0-1.623l-.992-.573l1-1.732l.992.573A3.496 3.496 0 0 1 17 14.645V13.5h2v1.145c.532.158 1.012.44 1.405.812l.992-.573l1 1.732l-.992.573a3.51 3.51 0 0 1 0 1.622l.992.573l-1 1.732l-.992-.573a3.496 3.496 0 0 1-1.405.812V22.5h-2v-1.145a3.496 3.496 0 0 1-1.405-.812l-.992.573l-1-1.732l.992-.572zM18 19.5a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3z"
            ></path>
          </svg>
          <span style="margin-left: 5px">用户</span>
        </div></router-link
      >
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M2 12c0-.865.11-1.703.316-2.504A3 3 0 0 0 4.99 4.867a9.99 9.99 0 0 1 4.335-2.505a3 3 0 0 0 5.348 0a9.99 9.99 0 0 1 4.335 2.505a3 3 0 0 0 2.675 4.63a10.036 10.036 0 0 1 0 5.007a3 3 0 0 0-2.675 4.629a9.99 9.99 0 0 1-4.335 2.505a3 3 0 0 0-5.348 0a9.99 9.99 0 0 1-4.335-2.505a3 3 0 0 0-2.675-4.63A10.056 10.056 0 0 1 2 12zm4.804 3c.63 1.091.81 2.346.564 3.524c.408.29.842.541 1.297.75A4.993 4.993 0 0 1 12 18c1.26 0 2.438.471 3.335 1.274c.455-.209.889-.46 1.297-.75A4.993 4.993 0 0 1 17.196 15a4.993 4.993 0 0 1 2.77-2.25a8.126 8.126 0 0 0 0-1.5A4.993 4.993 0 0 1 17.195 9a4.993 4.993 0 0 1-.564-3.524a7.989 7.989 0 0 0-1.297-.75A4.993 4.993 0 0 1 12 6a4.993 4.993 0 0 1-3.335-1.274a7.99 7.99 0 0 0-1.297.75A4.993 4.993 0 0 1 6.804 9a4.993 4.993 0 0 1-2.77 2.25a8.126 8.126 0 0 0 0 1.5A4.993 4.993 0 0 1 6.805 15zM12 15a3 3 0 1 1 0-6a3 3 0 0 1 0 6zm0-2a1 1 0 1 0 0-2a1 1 0 0 0 0 2z"
            ></path>
          </svg>
          <span style="margin-left: 5px">设置</span>
        </div></router-link
      >
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M3 3h18a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h16V5H4zm8 10h6v2h-6v-2zm-3.333-3L5.838 9.172l1.415-1.415L11.495 12l-4.242 4.243l-1.415-1.415L8.667 12z"
            ></path>
          </svg>
          <span style="margin-left: 5px">概况</span>
        </div></router-link
      >
      <router-link to="/" class="item">
        <div style="display: flex; align-items: center">
          <svg viewBox="0 0 24 24" width="20px" height="20px">
            <path
              fill="currentColor"
              d="M5 11h14V5H5v6zm16-7v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1zm-2 9H5v6h14v-6zM7 15h3v2H7v-2zm0-8h3v2H7V7z"
            ></path>
          </svg>
          <span style="margin-left: 5px">备份</span>
        </div></router-link
      >
      <div class="about">
        <div>
          <div>{{ name }}</div>
          <div>{{ icon }}</div>
        </div>
        <div>
          <span>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
              <el-button slot="reference"
              size="mini"
              circle
              class="icon"
                ><svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  class="h-5 w-5 text-gray-600 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10zm-4.987-3.744A7.966 7.966 0 0 0 12 20a7.97 7.97 0 0 0 5.167-1.892A6.979 6.979 0 0 0 12.16 16a6.981 6.981 0 0 0-5.147 2.256zM5.616 16.82A8.975 8.975 0 0 1 12.16 14a8.972 8.972 0 0 1 6.362 2.634a8 8 0 1 0-12.906.187zM12 13a4 4 0 1 1 0-8a4 4 0 0 1 0 8zm0-2a2 2 0 1 0 0-4a2 2 0 0 0 0 4z"
                  ></path></svg
              ></el-button>
            </el-popover>
          </span>
          <span>
            <el-popover
              placement="top-start"
              title="标题"
              width="200"
              trigger="hover"
              content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
            >
              <el-button slot="reference"
              size="mini"
              circle
              class="icon"
                ><svg
                  viewBox="0 0 24 24"
                  width="1.2em"
                  height="1.2em"
                  class="h-5 w-5 text-gray-600 group-hover:text-gray-900"
                >
                  <path
                    fill="currentColor"
                    d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2a9.985 9.985 0 0 1 8 4h-2.71a8 8 0 1 0 .001 12h2.71A9.985 9.985 0 0 1 12 22zm7-6v-3h-8v-2h8V8l5 4l-5 4z"
                  ></path></svg
              ></el-button>
            </el-popover>
          </span>
        </div>
      </div>
    </div>
    <!-- Main右 -->
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "ColdConsole",
  data() {
    return {
      name: "Administrator",
      icon: "管理员",
      text: "fa",
    };
  },
};
</script>

<style lang="less" scoped>
.main > .left {
  background-color: white;
  float: left;
  width: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  img {
    width: 100px;
    margin: 5px;
    border-radius: 10px;
  }
  .item {
    width: 200px;
    height: 45px;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    justify-content: center;
  }
  .about {
    height: 55px;
    border-radius: 5px;
    bottom: 20px;
    margin: 5px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    div {
      span {
        color: #847e7e;
        margin-left: 20px;
        display: block;
      }
    }
  }
}
.main > .right {
  margin-left: 250px;
  background-color: aqua;
}
.router-link-active {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
.router-link {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
a {
  text-decoration: none;
  color: rgb(0, 0, 0);
}
</style>