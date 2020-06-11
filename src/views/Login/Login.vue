<template>
  <div class="login">
    <div class="Center">
      <img src="../../assets/logo.png" alt="logo" class="Icon1" />
      <el-form
        :model="loginForm"
        class="demo-ruleForm"
        ref="loginForm"
        :rules="rules"
      >
        <!-- 用户名 -->
        <el-form-item prop="username">
          <el-input
            placeholder="请输入用户名"
            v-model="loginForm.username"
          ></el-input>
        </el-form-item>
        <!-- 密码 -->
        <el-form-item prop="password">
          <el-input
            type="password"
            placeholder="请输入密码"
            v-model="loginForm.password"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button @click="empty">清空</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "junmet",
        password: "123",
      },

      rules: {
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 1, max: 16, message: "请输入1~16位密码", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapActions(["setUserInfoActions"]),
    // 登录
    login() {
      this.$refs.loginForm.validate(async (valid) => {
        if (valid) {
          const res = await this.$api.getLogin(this.loginForm);
          this.setUserInfoActions({
            username: res.data.username,
            token: res.data.token,
          });

          // 解决Vuex数据刷新丢失
          // window.addEventListener("beforeunload", () => {
          //   sessionStorage.setItem("store", JSON.stringify(this.$store.state));
          // });

          sessionStorage.setItem("token", res.data.token);
          sessionStorage.setItem("username", res.data.username);
          this.$router.replace({ path: "home" });
          this.$message.success(res.data.msg + "，欢迎来到Ego商城后台系统");
        } else {
          this.$message.error("登录失败，请确认用户名，密码！！！");
        }
      });
    },
    // 清空
    empty() {
      this.loginForm.username = "";
      this.loginForm.password = "";
    },
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
