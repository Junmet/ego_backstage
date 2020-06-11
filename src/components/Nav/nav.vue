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
        <el-dropdown>
          <span> <i class="el-icon-user"></i>个人中心</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              {{ $store.state.userinfo.username }}</el-dropdown-item
            >
            <el-dropdown-item>
              <div @click="signout">退出</div>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  // created() {
  //   // 解决Vuex数据刷新丢失
  //   if (sessionStorage.getItem("store")) {
  //     // 替换vuex的state数据
  //     this.$store.replaceState(
  //       Object.assign(
  //         {},
  //         this.$store.state,
  //         JSON.parse(sessionStorage.getItem("store"))
  //       )
  //     );
  //   }
  // },
  methods: {
    signout() {
      sessionStorage.clear();
      // 强制刷新 退出页面
      window.location.reload("#/");
    },
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
      margin-left: 70px;
      line-height: 80px;
      color: white;
    }
    .content {
      font-size: 22px;
      color: white;
      line-height: 80px;
      margin: 0px 70px;
      span {
        margin-left: 4px;
      }
      :hover {
        color: greenyellow;
      }
    }
  }
}
.el-dropdown {
  font-size: 22px;
  color: white;
  cursor: pointer;
}
.el-dropdown-menu__item {
  width: 60px;
  text-align: center;
}
</style>
