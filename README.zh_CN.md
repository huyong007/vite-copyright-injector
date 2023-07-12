# vite-copyright-injector
**中文** | [English](./README.md) | [Français](./README.fr_FR.md)

## 描述

vite-copyright-injector 是一个专为 Vite.js 创建的插件，它的主要功能是自动在你的源代码文件顶部插入版权声明。

## 主要特点

- 自动插入版权声明
- 配置灵活，支持自定义版权文本
- 支持各种文件类型，包括 .js, .ts, .vue 等
- 快速，轻量，无侵入

## 安装

使用 npm 或者 yarn 安装：

```bash
npm install vite-insert-copyright --save-dev
# or
yarn add vite-insert-copyright -D
```

## 使用

在你的 `vite.config.js` 或 `vite.config.ts` 文件中引入并使用插件：

```javascript
import { defineConfig } from 'vite'
import copyright from 'vite-insert-copyright'

export default defineConfig({
  plugins: [
    copyright({
      // 可选配置项
    }),
  ],
})
```

## 配置

插件接受一个配置对象，以下是所有可用的配置项：

```javascript
{
  // 略
}
```

## 许可证

MIT
