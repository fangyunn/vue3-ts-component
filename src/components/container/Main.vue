<template>
  <main class="el-main" :style="{ height }">
    <slot />
  </main>
</template>
<script lang="ts">
export default {
  name: "ElMain"
}
</script>

<script lang="ts" setup>
import { withDefaults } from 'vue';

type Props = {
  height: string
}
withDefaults(defineProps<Props>(), {
  height: '500px'
})
</script>

<style lang="scss" scoped>
</style>