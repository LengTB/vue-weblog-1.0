<template>
  <div class="mycontext">
    <div class="top">
      <h3 style="margin-left: 20px; font-family: 'Microsoft YaHei'">
        最新文章
      </h3>
    </div>
    <div class="item" v-for="(item, index) in summarys" :key="index">
      <a :href="item.link">{{ item.title }}</a>
      <p class="text">摘要：{{ item.body }}</p>
      <p>
        <span class="time">
          <svg
            style="position: relative; top: 3px"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 28 24"
            width="15px"
            height="15px"
          >
            <path
              d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22Z"
            />
            <path
              d="M12,6a1,1,0,0,0-1,1v4.325L7.629,13.437a1,1,0,0,0,1.062,1.7l3.84-2.4A1,1,0,0,0,13,11.879V7A1,1,0,0,0,12,6Z"
            />
          </svg>
          发表于：{{ item.date }}
          <svg
            style="position: relative; top: 2px; margin-left: 10px"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="15px"
            height="15px"
          >
            <g id="_01_align_center" data-name="01 align center">
              <path
                d="M23.821,11.181v0C22.943,9.261,19.5,3,12,3S1.057,9.261.179,11.181a1.969,1.969,0,0,0,0,1.64C1.057,14.739,4.5,21,12,21s10.943-6.261,11.821-8.181A1.968,1.968,0,0,0,23.821,11.181ZM12,19c-6.307,0-9.25-5.366-10-6.989C2.75,10.366,5.693,5,12,5c6.292,0,9.236,5.343,10,7C21.236,13.657,18.292,19,12,19Z"
              />
              <path
                d="M12,7a5,5,0,1,0,5,5A5.006,5.006,0,0,0,12,7Zm0,8a3,3,0,1,1,3-3A3,3,0,0,1,12,15Z"
              />
            </g>
          </svg>
          {{ item.looking }}
          <svg
            style="position: relative; top: 2px; margin-left: 10px"
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="15px"
            height="15px"
          >
            <path
              d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Zm-3.585,18.4a2.973,2.973,0,0,1-3.83,0C4.947,16.006,2,11.87,2,8.967a4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,11,8.967a1,1,0,0,0,2,0,4.8,4.8,0,0,1,4.5-5.05A4.8,4.8,0,0,1,22,8.967C22,11.87,19.053,16.006,13.915,20.313Z"
            />
          </svg>
          {{ item.love }}
        </span>
      </p>
    </div>
    <el-pagination
      class="total"
      :hide-on-single-page="show"
      @current-change="handleCurrentChange"
      layout="prev, pager, next"
      prev-text="上一页"
      next-text="下一页"
      :total="bodys.length"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  props: ["summarys"],
  data() {
    return {
      //分页相关设置
      show: true,
    };
  },
  mounted() {
    // console.log(this.bodys);
  },
  computed: {
    // text() {
    //   return this.bodys;
    // },
  },
  methods: {
    handleCurrentChange(e) {
      this.$emit("handleCurrentChange", e);
    },
  },
};
</script>

<style lang="less" scoped>
.total {
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
}

.mycontext {
  font-family: 方正行黑简体;
  display: flex;
  flex-direction: column;
  // height: 100%;
  margin: 20px;
  background-color: white;
  border-radius: 10px;
  // a {
  //   color: black;
  //   text-decoration: none;
  // }
  .top {
    color: #e29300;
  }
  .item {
    padding: 10px;
    margin: 0px 10px;
    border-top: solid 1px #ebedf4;
    word-wrap: break-word;
    max-height: 200px;
    a {
      font-size: 20px;
      margin-left: 15px;
      margin-right: 20px;
      margin-bottom: 15px;
    }
    .text {
      font-family: 方正行黑简体;
      line-height: 21px;
      text-indent: 2em;
      height: 105px;
      overflow: hidden;
    }
  }
}

.time {
  font-family: YeZiGongChangAoYeHei;
  display: block;
  margin: 5px 0px;
  color: #888;
  font-size: 14px;
}
</style>