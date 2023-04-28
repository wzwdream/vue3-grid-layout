<template>
    <div class="grid">
        <canvas v-show="isDrawGridLines" ref="canvas" class="canvas"></canvas>
        <div class="grid-layout" ref="gridLayout">
            <slot />
            <div v-show="isDraging" class="dragingItem"></div>
        </div>
    </div>
</template>

<script lang="ts">
import { DraggableStart, DraggableHandle, DraggableEnd, Removes, HandleType } from '../../types/index'
import { key } from '../../help/key'
import useDrage from '../../help/useDrage'
import useLayout from '../../help/useLayout'
import { calcColWidth, calcHeight, deepClone, drawGridLines } from '../../help/utils';
import { defaultProps } from './defualtProps'
import { defineComponent, onMounted, reactive, ref, watchEffect, provide, watch } from 'vue';
import { checkLayout } from '@/help/dragerule';

export default defineComponent({
    name: "GridLayout",
    props: defaultProps,
    emits: ['update:data', 'draggableStart', 'draggableHandle', 'draggableEnd', 'remove'],
    setup(props, { emit }) {
        /**
         * 初始化数据
         */
        const canvas = ref<HTMLCanvasElement>()
        /**
         * 引用hook，分离拖拽、缩放、删除的逻辑代码
         */
        const {
            draggableStart,
            draggableHandle,
            draggableEnd,
            isDraging,
            removes,
            propsId,
            dragingstyle,
            layoutdata,
            col,
            rowH,
            gutter,
            drage,
            resize,
            removeItem,
            isDrawGridLines,
        } = useDrage(props)
        const { rowHeight, colWidth, layoutStyle, updateStyle } = useLayout()
        /**
         * 保证hook中的数据是最新数据
         */
        watchEffect(() => {
            // 绘制网格线
            if (canvas.value && gridLayout.value && props.isDrawGridLines) {
                drawGridLines(canvas.value, rowHeight.value, gridLayout.value.clientWidth, colWidth.value, rowH.value, gutter.value)
            }
            if (props.data) layoutdata.value = deepClone(checkLayout(props.data, props.col))
            drage.value = props.drage
            rowH.value = props.rowH
            col.value = props.col
            gutter.value = props.gutter
            resize.value = props.resize
            removeItem.value = props.remove
            isDrawGridLines.value = props.isDrawGridLines
            updateStyle(col.value, rowH.value, gutter.value)
        })
        /**
         * 抛出emit事件
         */
        const updateData = () => {
            emit('update:data', layoutdata.value)
        }
        const dragStart: DraggableStart = (id: string) => {
            draggableStart(id)
            emit('draggableStart', id)
        }
        const dragHandle: DraggableHandle = (shiftX: number, shiftY: number, handleType?: HandleType) => {
            const { newData, newItem } = draggableHandle(shiftX, shiftY, colWidth.value, handleType)
            rowHeight.value = calcHeight(rowH.value, gutter.value, newData)
            emit('draggableHandle', propsId.value, newItem)
        }
        const dragEnd: DraggableEnd = () => {
            draggableEnd()
            updateData()
            emit('draggableEnd', layoutdata.value)
        }
        const remove: Removes = (id: string) => {
            removes(id)
            updateData()
            emit('remove', id)
        }
        /**
         * 计算每个item的宽度高度
         */
        const gridLayout = ref<HTMLDivElement | null>(null)
        const calcWidth = () => {
            if (gridLayout.value) {
                colWidth.value = calcColWidth(col.value, gutter.value, gridLayout.value.clientWidth)
            }
        }
        watch(col, () => {
            calcWidth()
            layoutdata.value = deepClone(checkLayout(layoutdata.value, col.value))
            console.log('layoutdata', layoutdata.value)
        })
        onMounted(() => {
            calcWidth()
            if (props.data) {
                rowHeight.value = calcHeight(props.rowH, props.gutter, props.data)
            }
            window.onresize = calcWidth
        })
        /**
         * 注入的参数
         */
        const provideData = {
            layoutdata, // 布局数据
            rowH, // item高度
            col, // 列数
            gutter, // 间距
            colWidth, // item宽度
            drage, // 是否可拖拽
            resize, // 是否可缩放
            remove: removeItem, // 是否可删除
            draggableStart: dragStart, // 拖拽开始
            draggableHandle: dragHandle, // 拖拽中
            draggableEnd: dragEnd, // 拖拽结束
            removes: remove // 删除元素方法
        }
        provide(key, provideData)
        return {
            layoutStyle,
            dragingstyle,
            isDraging,
            gridLayout
        }
    }
})
</script>

<style scoped lang="scss">
.grid {
    position: relative;

    .grid-layout {
        display: grid;
        place-items: center center;
        grid-template-columns: v-bind('layoutStyle.gridTemplateColumns');
        grid-auto-rows: v-bind('layoutStyle.gridAutoRows');
        gap: v-bind('layoutStyle.gap');
        height: v-bind('layoutStyle.height');
        overflow-x: hidden;
        touch-action: none;

        .dragingItem {
            width: 100%;
            height: 100%;
            background-color: #2c7ec2;
            grid-area: v-bind('dragingstyle.yStart') / v-bind('dragingstyle.xStart') / v-bind('dragingstyle.yEnd') / v-bind('dragingstyle.xEnd');
            z-index: 5;
        }
    }

    .canvas {
        position: absolute;
        top: 0;
        left: 0;
    }
}
</style>