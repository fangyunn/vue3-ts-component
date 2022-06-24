import { Rules, Values } from 'async-validator'
// InjectionKey 接口扩展了Symbol的泛型类型 用于在生产者和消费者之间同步inject值的类型
import { InjectionKey } from 'vue'
// form-item的数据类型
export type FormData = {
  model: Record<string, unknown>,
  rules?: Rules
}
// validate的值是一个函数 函数返回一个promise且类型为Values
export type FormItem = {
  validate: () => Promise<Values>
}

export type FormType = {
  validate: (cb: (isValid: boolean) => void) => void
}

// 限制key的类型为FormData
export const key: InjectionKey<FormData> = Symbol('form-data')
