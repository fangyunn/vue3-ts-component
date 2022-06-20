
<template>
  <section class="el-container" :class="{ 'is-vertical': isVertical }">
    <slot />
  </section>
</template>

<script lang="ts">
export default {
  name: "ElContainer"
}
</script>
<script lang="ts" setup>
import { computed, useSlots, Component, VNode } from 'vue';

interface Props {
  direction?: string
}

const props = defineProps<Props>()
// slot的内容
const slots = useSlots()
const isVertical = computed(() => {
  if (slots?.default) {
    // slots.default()获取所有slot组件
    return slots.default().some((vn: VNode) => {
      const tag = (vn.type as Component).name
      return tag === 'ElHeader' || tag === 'El  Footer'
    })
  } else {
    if (props.direction === 'vertical') {
      return true
    } else {
      return false
    }
  }
})

</script>
<style lang="scss" scoped>
@import '../../styles/mixin.scss';

@include b(container) {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;

  @include when(vertical) {
    flex-direction: column;
  }
}
</style>
