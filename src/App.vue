<template>
  <div>
    <div class="handle">
      <span>col</span>
      <input type="text" v-model="col" @input="col = Number(col)">
      <span>rowH</span>
      <input type="text" v-model="rowH">
      <span>gutter</span>
      <input type="text" v-model="gutter">
      <span>drage</span>
      <input type="text" v-model="col">
      <span>resize</span>
      <select id="resize" onchange="val => resize = val === 'true' ? true : false">
        <option>true</option>
        <option>false</option>
      </select>
      <span>remove</span>
      <input type="text" v-model="remove">
      <span>isDrawGridLines</span>
      <input type="text" v-model="isDrawGridLines">
    </div>
    <grid-layout v-model:data="layout" :col="col" :rowH="rowH" :gutter="gutter" :drage="drage" :resize="resize"
      :remove="remove" :isDrawGridLines="isDrawGridLines" @draggableStart="draggableStart"
      @draggableHandle="draggableHandle" @draggableEnd="draggableEnd" @remove="removes">
      <grid-item v-for="item in layout" :key="item.id" :id="item.id">
        {{ item.id }}
      </grid-item>
    </grid-layout>
    <button @click="layout = []">改变</button>
  </div>
</template>

<script setup lang="ts">
import { Layout, LayoutItem } from './Vue3GridLayout/types';
import GridLayout from '@/components/grid-layout/index.vue'
import GridItem from '@/components/grid-item/index.vue'
import { ref, watch } from 'vue';
const col = ref(12)
const rowH = ref(50)
const gutter = ref(10)
const drage = ref(true)
const resize = ref(true)
const remove = ref(true)
const isDrawGridLines = ref(true)
const layout = ref([
  { id: '1', x: 1, y: 1, h: 1, w: 1 },
  { id: '2', x: 2, y: 1, h: 1, w: 2 },
  { id: '3', x: 3, y: 1, h: 1, w: 1 },
  { id: '4', x: 4, y: 1, h: 1, w: 1 },
  { id: '5', x: 5, y: 1, h: 1, w: 1 },
  { id: '6', x: 6, y: 1, h: 1, w: 1 },
  { id: '7', x: 7, y: 1, h: 1, w: 1 },
  { id: '8', x: 8, y: 1, h: 1, w: 1 },
  { id: '9', x: 1, y: 2, h: 1, w: 1 },
  { id: '10', x: 1, y: 3, h: 1, w: 1 },
  { id: '11', x: 1, y: 4, h: 1, w: 1 },
  { id: '12', x: 1, y: 5, h: 4, w: 1 },
  { id: '13', x: 2, y: 2, h: 1, w: 1 },
  { id: '14', x: 2, y: 3, h: 1, w: 1 },
  { id: '15', x: 2, y: 4, h: 1, w: 1 },
  { id: '16', x: 5, y: 5, h: 1, w: 2 },
  { id: '17', x: 1, y: 10, h: 1, w: 12 },
])
// 验证更新数据是否正确
watch(layout, () => {
  console.log('数据更新', layout.value)
}, { deep: true })

const draggableStart = (id: string) => {
  console.log('拖拽开始', id)
}
const draggableHandle = (id: string, data: LayoutItem) => {
  console.log('拖拽中', id, data)
}
const draggableEnd = (data: Layout) => {
  console.log('拖拽结束', data)
}
const removes = (id: string) => {
  console.log('删除', id)
}
</script>

<style scoped>
.handle {
  display: flex;
  flex-wrap: wrap;
}
</style>