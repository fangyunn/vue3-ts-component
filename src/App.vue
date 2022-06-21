<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <el-container>
    <el-aside :width="'200px'">
      aside
    </el-aside>
    <el-container>
      <el-header :height="'50px'">
        header
      </el-header>
      <el-main :height="'500px'">
        <el-button :type="'primary'" :size="'small'">测试按钮</el-button>
        <el-button :type="'success'" :size="'medium'">测试按钮</el-button>
        <el-button :type="'danger'" :size="'large'">测试按钮</el-button>
      </el-main>
      <el-footer :height="'100px'">
        footer
      </el-footer>
    </el-container>
  </el-container>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
