# 🎄 vue3-grid-layout

![](https://img.shields.io/github/package-json/v/wzwdream/vue3-grid-layout) ![](https://img.shields.io/npm/dm/vue3-grid-layout-picker) ![](https://img.shields.io/bundlephobia/min/vue3-grid-layout) ![](https://img.shields.io/github/wzwdream/vue3-grid-layout)

一个基于vue3+grid布局的网格拖拽布局，支持网格吸附、碰撞检测等。


## ⭐️ 功能一览

-   可拖拽
-   可调整大小
-   网格吸附
-   碰撞检测

## 📦 安装

```shell
# 使用 npm
npm install vue3-grid-layout --save

# 使用 yarn
yarn add vue3-grid-layout -D

# 使用 pnpm
pnpm add vue3-grid-layout -D
```
## 💡 用法

### 引入
```js
// main.ts
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Vue3GrifLayout from 'vue3-grid-layout-picker'
createApp(App).use(Vue3GrifLayout).mount('#app')
```

### 组件中使用
```ts
<template>
  <div class="layout-box">
        <grid-layout
            v-model:data="layout"
            @draggableStart="draggableStart"
            @draggableHandle="draggableHandle"
            @draggableEnd="draggableEnd"
            @remove="remove"
        >
          <grid-item v-for="item in layout" :key="item.id" :id="item.id">
              {{ item.id }}
          </grid-item>
      </grid-layout>
      <button @click="layout = []">改变</button>
  </div>
</template>

<script setup lang="ts">
import { Layout, LayoutItem } from '@/types/index';
import GridLayout from '@/components/grid-layout/index.vue'
import GridItem from '@/components/grid-item/index.vue'
import { ref, watch } from 'vue';

const layout = ref([
  { id: '1', x: 1, y: 1, h: 1, w: 1 },
  { id: '2', x: 2, y: 1, h: 1, w: 1 },
  { id: '3', x: 3, y: 1, h: 1, w: 1 },
  { id: '4', x: 4, y: 1, h: 1, w: 1 },
  { id: '5', x: 1, y: 2, h: 1, w: 1 },
  { id: '6', x: 1, y: 3, h: 1, w: 1 },
  { id: '7', x: 1, y: 4, h: 1, w: 1 },
  { id: '8', x: 1, y: 5, h: 4, w: 1 },
  { id: '9', x: 2, y: 2, h: 1, w: 1 },
  { id: '10', x: 2, y: 3, h: 1, w: 1 },
  { id: '11', x: 2, y: 4, h: 1, w: 1 },
  { id: '12', x: 5, y: 5, h: 1, w: 2 },
])
// 验证更新数据是否正确
watch(layout, () => {
  console.log('数据更新', layout.value)
}, {deep: true})

const draggableStart = (id: string) => {
  console.log('拖拽开始', id)
}
const draggableHandle = (id: string, data: LayoutItem) => {
  console.log('拖拽中', id, data)
}
const draggableEnd = (data: Layout) => {
  console.log('拖拽结束', data)
}
const remove = (id: string) => {
  console.log('删除', id)
}
</script>
<style>
.layout-box {
  width: 1000px;
}
</style>
```
> **这里需要注意的一点是，在组件的外层或者组件本身需要指定宽度，不如宽度会计算为0**


## 🎁 Apis

### 🔩 Props
#### GridLayout
```ts
interface LayoutItem {
    id: string,
    x: number,
    y: number,
    h: number,
    w: number
}
type Layout = LayoutItem[]
```
| 名称            | 类型      | 默认值 | 说明                                            |
| --------------- | --------- | ------ | ----------------------------------------------- |
| data            | `Layout`  | `[]`   | 布局数据，支持双向绑定v-model:data="layoutData" |
| col             | `number`  | 12     | 列数                                            |
| rowH            | `number`  | 50     | 行高                                            |
| gutter          | `number`  | 10     | 网格间距                                        |
| drage           | `boolean` | true   | 是否可拖拽                                      |
| resize          | `boolean` | true   | 是否可缩放                                      |
| remove          | `boolean` | true   | 是否可删除                                      |
| isDrawGridLines | `boolean` | true   | 是否绘制网格线_                                 |

#### GridItem

| 名称            | 类型      | 默认值 | 说明                                            |
| --------------- | --------- | ------ | ----------------------------------------------- |
| id            | `string`  | ``   | 方块的唯一标识 |

### 🎍 插槽

| 名称        | 说明                           |
| ----------  | ------------------------------ |
| default |  自定义每个方块的内容 |
| resize  | 自定义缩放的图标 |
| remove  | 自定义删除图标 |

### 🪢 事件

| 名称              | 说明               |  回调参数     |
| -------------     | ----------------- | ------------  |
| draggableStart    | 拖拽开始时触发 | 拖拽的方块的id |
| draggableHandle   | 拖拽中触发  | 拖拽方块的id、拖拽方块的数据 |
| draggableEnd      | 拖拽结束时触发 | 拖拽结束后的布局数据 |
| remove            | 删除方块时触发 | 删除的方块的id  |