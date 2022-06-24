import { getCurrentInstance, ComponentInternalInstance } from 'vue'
export function useGlobalConfig() {
  const instance: ComponentInternalInstance | null = getCurrentInstance()
  if (!instance) {
    console.log('useGlobalConfig必须整在setup里面')
    return
  }
  return instance.appContext.config.globalProperties.$AILEMENT || {}
}