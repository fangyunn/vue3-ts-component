<template>
  <footer class="el-footer" :style="{ height }">
    <slot />
  </footer>
</template>

<script lang="ts">
export default {
  name: "ElFooter"
}
</script>
<script lang="ts" setup>
import { withDefaults } from 'vue';
type Props = {
  height: string
}
withDefaults(defineProps<Props>(),
  { height: '100px' })

</script>
<style lang="scss" scoped>
</style>