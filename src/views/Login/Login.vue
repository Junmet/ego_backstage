<template>
  <div class="login">
    <div class="Center">
      <img src="../../assets/logo.png" alt="logo" class="Icon1" />
      <el-form class="demo-ruleForm" :rules="rules">
        <!-- 用户名 -->
        <el-form-item prop="name">
          <el-input placeholder="请输入用户名" v-model="name"></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">登录</el-button>
          <el-button>清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      name: "",
      password: "",
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 6, max: 16, message: "请输入6~16位密码", trigger: "blur" },
        ],
      },
    };
  },
};
</script>

<style lang="less" scoped>
.login {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: #2f4050;
  .Center {
    position: absolute;
    width: 600px;
    height: 300px;
    background-color: white;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border-radius: 10px;
    .Icon1 {
      position: relative;
      top: 10%;
      left: 50%;
      width: 150px;
      height: 150px;
      transform: translate(-50%, -50%);
    }
    .demo-ruleForm {
      margin: auto;
      width: 450px;
    }
  }
}
.login .Center .demo-ruleForm[data-v-2c86e14e] {
  margin-top: -70px;
}
.el-button {
  width: 220px;
}
</style>
