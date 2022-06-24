<template>
  <div class="el-form">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElForm'
}
</script>
<script lang="ts" setup>
import { PropType, provide, ref } from 'vue'
import { Rules } from 'async-validator'
import { FormItem, key } from './type'
import { emitter } from '../../emitter'
// el-form 需要接收model提供数据绑定 和 rules提供校验规则 两个属性
const props = defineProps({
  model: { type: Object, required: true },
  // propType 提供了一种更明确的类型
  rules: { type: Object as PropType<Rules> }
})

// 接收的model和rules要传递给子组件和子子组件
provide(key, {
  // { name:'',age:'',obj:{},arr:[] }
  model: props.model,
  rules: props.rules
})
// items 为FormItem类型的数组
const items = ref<FormItem[]>([])

emitter.on('addFormItem', item => {
  items.value.push(item)
})
</script>
<style lang="scss" scoped>
</style>