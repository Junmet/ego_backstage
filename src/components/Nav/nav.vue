<template>
  <div class="nav">
    <div class="top_nav">
      <h1>Ego商城后台系统</h1>
      <div class="content">
        <router-link to="/query">
          <i class="el-icon-search"></i>
          <span>查询商品</span>
        </router-link>
      </div>
      <div class="content">
        <router-link to="/specifications">
          <i class="el-icon-folder-checked"> </i>
          <span>规格参数</span>
        </router-link>
      </div>
      <div class="content">
        <router-link to="/contents">
          <i class="el-icon-files"></i>
          <span>内容分类管理</span>
        </router-link>
      </div>
      <div class="content">
        <i class="el-icon-star-off"></i>
        <span>登录/退出</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="less" scoped>
.nav {
  .top_nav {
    display: flex;
    width: 100%;
    height: 80px;
    background-color: rgb(50, 57, 70);
    h1 {
      margin-left: 80px;
      line-height: 80px;
      color: white;
    }
    .content {
      font-size: 22px;
      color: white;
      line-height: 80px;
      margin: 0px 70px;
      span {
        margin-left: 5px;
      }
      :hover {
        color: greenyellow;
      }
    }
  }
}
</style>
