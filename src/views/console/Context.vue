<template>
  <div class="centext">
    <ContextTop :list="list"></ContextTop>
    <div class="body">
      <el-empty
        description="暂无数据"
        v-show="show"
        :image-size="250"
        class="empty"
      ></el-empty>
      <el-table
        :data="summarys.summaryEntities"
        style=""
        class="table"
        stripe
        max-height="700px"
        v-show="!show"
        current-row-key="id"
      >
        <el-table-column label="标题" prop="title"> </el-table-column>
        <el-table-column label="路由" prop="routerName"> </el-table-column>
        <el-table-column label="摘要" prop="summary"> </el-table-column>
        <el-table-column label="时间" prop="createTime"></el-table-column>
        <el-table-column label="状态" prop="status"></el-table-column>
        <el-table-column align="right">
          <template slot-scope="scope">
            <el-button
              size="mini"
              @click="handleArticle(scope.$index, scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.$index, scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
      <el-pagination
        background
        layout="prev, pager, next"
        :total="summarys.total"
        class="total"
        @current-change="handleCurrentChange"
        v-show="!show"
      >
      </el-pagination>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import ContextTop from "@/components/console/top.vue";
export default {
  name: "ConsoleContext",
  props: [],
  data() {
    return {
      list: [
        {
          name: "分类",
          path: "/console/context/classify",
        },
        {
          name: "标签",
          path: "/console/context/label",
        },
        {
          name: "回收站",
          path: "/console/context/recovered",
        },
        {
          name: "新建",
          path: "/console/context/news",
          icon: require("@/assets/console/plus-circle.svg"),
        },
      ],
      summarys: {},
      search: "",
      show: false,
      statu: ["未发布", "已发布", "已隐藏"],
    };
  },
  methods: {
    handleArticle(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      console.log(index, row);
    },
    handleCurrentChange(index) {
      this.$axios
        .get("/console/summary/" + (index - 1), {
          headers: {
            token: this.$store.state.token,
          },
        })
        .then((res) => {
          this.summarys = res.data.data;
        })
        .catch(() => {
          this.$message.error(
            "后台数据获取失败，请检查后端服务器运行是否正常！"
          );
        });
    },
  },
  created() {
    this.$axios
      .get("/console/summary/0", {
        headers: {
          token: this.$store.state.token,
        },
      })
      .then((res) => {
        this.summarys = res.data.data;
      })
      .catch(() => {
        this.$message.error("后台数据获取失败，请检查后端服务器运行是否正常！");
      });
  },
  components: {
    ContextTop,
  },
};
</script>

<style lang="less" scoped>
.body {
  margin: 15px;
  .empty {
    width: 100%;
    height: 100vh;
  }
  .total {
    margin-top: 30px;
    text-align: center;
  }
}
</style>