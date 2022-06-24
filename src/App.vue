<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { reactive, ref } from 'vue'
import { FormType } from './components/form/type'
const model = reactive({
  username: '',
  password: ''
})
const rules = reactive({
  username: [
    {
      required: true, message: '请输入username'
    }
  ],
  password: [
    {
      required: true, message: '请输入password'
    }
  ]
})

// 获取表单实例
const myForm = ref<FormType>()
const login = () => {
  myForm.value?.validate((isValid) => {
    if (isValid) {
      console.log(model)
    } else {
      alert('请正确填写表单')
    }
  })
}
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
        <div>
          <el-button :type="'primary'" :size="'small'">测试按钮</el-button>
          <el-button :type="'success'" :size="'medium'">测试按钮</el-button>
          <el-button :type="'danger'" :size="'large'">测试按钮</el-button>
        </div>
        <div>
          <el-form :model="model" :rules="rules">
            <el-form-item :label="'用户名:'" :prop="'username'">
              <el-input v-model="model.username"></el-input>
            </el-form-item>
            <el-form-item :label="'密码:'" :prop="'password'">
              <el-input v-model="model.password"></el-input>
            </el-form-item>
          </el-form>
          <el-button @click="login">login</el-button>
        </div>
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
