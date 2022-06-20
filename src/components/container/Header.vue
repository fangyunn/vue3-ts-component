<template>
  <header class="el-header" :style="{ height }">
    header
  </header>
</template>

<script lang="ts">
export default {
  name: "ElHeader"
}
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue';
// 非对象使用type声明 对象使用interface声明
type Props = {
  height: string
}
withDefaults(defineProps<Props>(), {
  height: "100px"
})

</script>

<style lang="scss" scoped>
</style>