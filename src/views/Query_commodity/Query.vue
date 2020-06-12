<template>
  <div class="Query">
    <el-table :data="filtertableData" style="width: 100%">
      <el-table-column type="index" width="50"> </el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="writer" label="作者"></el-table-column>
      <el-table-column prop="time" label="时间"></el-table-column>
      <el-table-column
        :show-overflow-tooltip="true"
        prop="content"
        label="内容"
      ></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button
            size="mini"
            icon="el-icon-edit"
            @click="handleEdit(scope.$index, scope.row)"
            circle
          ></el-button>
          <el-button
            size="mini"
            icon="el-icon-delete"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            circle
          ></el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="paging">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        layout="total, sizes, prev, pager, next, jumper"
        :current-page="currentPage"
        :page-sizes="pageSizes"
        :page-size="PageSize"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "Query",
  data() {
    return {
      // 总数据
      tableData: [],
      // 总条数
      total: 0,
      // 默认显示页数
      currentPage: 1,
      // 个数选择器（可修改）
      pageSizes: [2, 4, 6, 8],
      // 默认每页显示的条数（可修改）
      PageSize: 1,
    };
  },
  computed: {
    filtertableData() {
      return this.tableData.slice(
        (this.currentPage - 1) * this.PageSize,
        this.currentPage * this.PageSize
      );
    },
  },
  async created() {
    let res = await this.$api.getSelect();
    if (res.data.success == true) {
      this.tableData = res.data.interesting.map((value) => {
        return {
          ...value,
          pageIndex: 1,
          pageSize: 3,
        };
      });
    }
    this.total = res.data.interesting.length;
    this.PageSize = this.tableData[0].pageSize;
  },
  methods: {
    handleSizeChange(val) {
      this.PageSize = val;
    },
    // 当前的页码数（显示第几页）
    handleCurrentChange(val) {
      this.currentPage = val;
    },
  },
};
</script>

<style lang="less" scoped>
.Query {
  width: 1200px;
  margin: 0 auto;
  margin-top: 10px;

  .paging {
    width: 500px;
    margin: 30px auto;
  }
}
</style>
