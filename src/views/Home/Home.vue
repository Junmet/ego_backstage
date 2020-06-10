<template>
  <div class="Home">
    <Nav />
    <router-view></router-view>
  </div>
</template>
<script>
import Nav from "@/components/Nav/nav";
export default {
  data() {
    return {};
  },
  components: {
    Nav,
  },
};
</script>
<style lang="less" scoped></style>
