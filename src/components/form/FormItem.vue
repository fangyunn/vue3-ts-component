<template>
  <div class="el-form-item">
    <label v-if="label">{{ label }}</label>
    <slot />
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ElFormItem'
}
</script>
<script lang="ts" setup>
import Schema from 'async-validator'
import { ref, inject, onMounted } from 'vue'
import { key, FormItem, FormData } from './type'
import { emitter } from '../../emitter'

// form-item 接收label文本和prop属性用来进行validator
/**
 * 首先进行validator需要prop和model里面的属性想对象,也就是当前的formData
 * 然后就是根据例如input输入的值是否符合rules里相对应的属性的规则
 */
interface Props {
  label?: string,
  prop?: string
}

const props = withDefaults(defineProps<Props>(), {
  label: '',
  prop: ''
})
const error = ref('')
const formData = inject<FormData>(key)
// 定义一个o 对象 键值为validate 和 下面的函数validate()?
const o: FormItem = {
  validate
}
// 将对象o暴露出去 也就是表单验证的结果 
defineExpose(o)

onMounted(() => {
  if (props.prop) {
    // 监听validate
    emitter.on('validate', () => {
      validate()
    })
    // 该生命钩子期间将addFormItem广播出去
    emitter.emit('addFormItem', o)
  }
})

// 表单验证
function validate() {
  // 没有传入rules 直接验证通过
  if (formData?.rules === undefined) {
    return Promise.resolve({ result: true })
  }
  // 当前prop的rules
  const rules = formData.rules[props.prop]
  // 当前prop的value
  const value = formData.model[props.prop]
  const schema = new Schema({ [props.prop]: rules })
  return schema.validate({ [props.prop]: value }, (errors, fields) => {
    if (errors) {
      error.value = errors[0].message || '校验错误'
    } else {
      error.value = ''
    }
  })
}
</script>

<style lang="scss" scoped>
@import '../../styles/mixin.scss';
</style>