<template>
  <aside class="el-aside" :style="{ width }">
    <slot />
  </aside>
</template>
<script lang="ts">
export default {
  name: "ElAside"
}
</script>
<script lang="ts" setup>
// withDefaults 使用类型声明时的默认props值
import { withDefaults } from 'vue';

type Props = {
  width: string
}
withDefaults(defineProps<Props>(), {
  width: "300px"
})

</script>

<style lang="scss" scoped>
</style>