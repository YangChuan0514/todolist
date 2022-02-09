import type { App } from 'vue'
import {
  ElButton,
  ElForm,
  ElFormItem,
  ElInput,
  ElLoading,
  ElMessage,
  ElMessageBox,
  ElTag,
  ElDialog
} from 'element-plus'
import 'element-plus/dist/index.css'

// 组件列表
const components = [ElButton, ElForm, ElFormItem, ElInput, ElTag, ElDialog]

// 插件列表
const plugins = [ElLoading, ElMessage, ElMessageBox]

// 设置语言为中文
// import { locale } from 'element-plus'
import lang from 'element-plus/lib/locale/lang/zh-cn'
import 'dayjs/locale/zh-cn'
// https://github.com/anncwb/vite-plugin-style-import/issues/16
// 解决elementplus locale在不同模式下导出不同
// if (typeof locale === 'function') {
//   locale(lang) // dev
// } else {
//   // @ts-ignore
//   locale.use(lang) // production
// }

// 暴露出useElementPlus方法，给vue实例调用
export function useElementPlus(app: App<Element>) {
  components.forEach((component) => {
    app.component(component.name, component)
  })
  plugins.forEach((plugin) => {
    app.use(plugin)
  })
}
