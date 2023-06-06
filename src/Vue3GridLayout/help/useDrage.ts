import { computed, reactive, ref } from 'vue'
import { propsData, LayoutItem, HandleType, Layout } from '../types'
import { checkLayout, collisionAvoidanceForItems, collisionDetection, getCollidingIndexes } from './dragerule'
import { calcBoundary, deepClone, findIndexById } from './utils'
const useDrage = (data: propsData) => {
    /**
     * 初始化数据
    */
    const layoutdata = ref<Layout>(deepClone(checkLayout(data.data, data.col)))
    const col = ref(data.col)
    const rowH = ref(data.rowH)
    const gutter = ref(data.gutter)
    const drage = ref(data.drage)
    const resize = ref(data.resize)
    const removeItem = ref(data.remove)
    const isDrawGridLines = ref(data.isDrawGridLines)
    const isDraging = ref(false) // 是否拖拽中
    const propsId = ref('') // 当前操作的item的id
    const drageItem = reactive({ x: 0, y: 0, h: 0, w: 0 }) // 操作item的提示数据
    /**
     * 操作item的数据
     */
    const dragingData = computed(() => {
        const { index, data } = findIndexById(layoutdata.value, propsId.value)
        return {
            index,
            data
        }
    })
    /**
     * 开始拖拽，记录当前操作的item的初始数据
     * @param id 当前操作的item的id
     */
    const draggableStart = (id: string) => {
        propsId.value = id
        const { x, y, h, w } = dragingData.value.data
        drageItem.x = x
        drageItem.y = y
        drageItem.h = h
        drageItem.w = w
        isDraging.value = true
    }
    /**
     * 拖拽中，计算当前操作item的位置/大小，并更新提示数据
     * @param shiftX 横向移动的距离
     * @param shiftY 纵向移动的距离
     * @param handleType 操作类型：drag-拖拽、resize-缩放
     */
    const draggableHandle = (shiftX: number, shiftY: number, colWidth: number, handleType?: HandleType) => {
        const { x, y, h, w } = dragingData.value.data
        const moveX = Math.round((shiftX) / (colWidth + gutter.value))
        const moveY = Math.round((shiftY) / (rowH.value + gutter.value))
        if (handleType === 'drag') {
            drageItem.x = calcBoundary(x, moveX, w, col.value,)
            drageItem.y = calcBoundary(y, moveY, h)
        } else if (handleType === 'resize') {
            drageItem.w = (w + moveX) <= 0 ? 1 : (w + moveX)
            drageItem.h = (h + moveY) <= 0 ? 1 : (h + moveY)
        }
        const newItem = { ...drageItem, id: propsId.value }
        const newData = deepClone(layoutdata.value)
        const { index } = findIndexById(newData, propsId.value)
        newData[index] = newItem
        if (collisionDetection(newData, newItem)) {
            const collidingIndexes = getCollidingIndexes(newData, newItem)
            const avoidingItems = collisionAvoidanceForItems(newData, collidingIndexes, col.value)
            avoidingItems.forEach(item => {
                if (item.id !== propsId.value) {
                    const { index } = findIndexById(layoutdata.value, item.id)
                    layoutdata.value.splice(index, 1, item)
                }
            })
        } else {
            layoutdata.value.splice(dragingData.value.index, 1, dragingData.value.data)
        }
        return {
            newData,
            newItem
        }
    }
    /**
    * 拖拽结束，更新操作的item的数据到初始化数据中
    */
    const draggableEnd = () => {
        const { x, y, h, w } = drageItem
        const { index, data } = dragingData.value
        const newData: LayoutItem = {
            ...data,
            x,
            y,
            h,
            w
        }
        layoutdata.value.splice(index, 1, newData)
        isDraging.value = false
    }
    /**
     * 删除item，并更新数据
     * @param id 当前操作的item的id
     */
    const removes = (id: string) => {
        propsId.value = id
        const { index } = dragingData.value
        layoutdata.value.splice(index, 1)
    }
    /**
     * 当前操作的item的提示数据的样式和布局样式
     */
    const dragingstyle = computed(() => {
        return {
            xStart: drageItem.x,
            yStart: drageItem.y,
            xEnd: drageItem.x + drageItem.w,
            yEnd: drageItem.y + drageItem.h
        }
    })
    return {
        layoutdata,
        col,
        rowH,
        gutter,
        drage,
        resize,
        removeItem,
        isDrawGridLines,
        draggableStart,
        draggableHandle,
        draggableEnd,
        drageItem,
        isDraging,
        dragingstyle,
        removes,
        propsId,
        dragingData
    }
}
export default useDrage