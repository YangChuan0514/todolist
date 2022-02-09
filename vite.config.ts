import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// import {
//   createStyleImportPlugin,
//   AndDesignVueResolve,
//   VantResolve,
//   ElementPlusResolve,
//   NutuiResolve,
//   AntdResolve,
// } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // createStyleImportPlugin({
    //   resolves: [
    //     AndDesignVueResolve(),
    //     VantResolve(),
    //     ElementPlusResolve(),
    //     NutuiResolve(),
    //     AntdResolve(),
    //   ],
    //   libs: [
    //     // If you don’t have the resolve you need, you can write it directly in the lib, or you can provide us with PR
    //     {
    //       libraryName: 'ant-design-vue',
    //       esModule: true,
    //       resolveStyle: (name) => {
    //         return `ant-design-vue/es/${name}/style/index`
    //       },
    //     },
    //   ],
    // }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
})
