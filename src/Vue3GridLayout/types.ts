import { Ref } from "vue"

interface LayoutItem {
    id: string
    x: number
    y: number
    h: number
    w: number
}

type Layout = LayoutItem[]

type DraggableStart = (index: string) => void
type DraggableHandle = (shiftX: number, shiftY: number, handleType?: HandleType) => void
type DraggableEnd = () => void
type Removes = (index: string) => void

interface Parameter {
    layoutdata: Ref<Layout> // 布局数据
    col: Ref<number> // 列数
    rowH: Ref<number> // 行高
    gutter: Ref<number> // 网格间距
    drage?: Ref<boolean> // 是否可拖拽
    resize?: Ref<boolean> // 是否可拖拽
    remove?: Ref<boolean> // 是否可拖拽
    isDrawGridLines?: Ref<boolean> // 是否绘制网格线
    colWidth: Ref<number> // item宽度
    draggableStart: DraggableStart // 开始拖拽
    draggableHandle: DraggableHandle // 拖拽
    draggableEnd: DraggableEnd // 拖拽结束
    removes: Removes // 删除
}

interface propsData {
    data: Layout // 布局数据
    col: number, // 列数
    rowH: number // 行高
    gutter: number // 网格间距
    drage: boolean // 是否可拖拽
    resize: boolean // 是否可拖拽
    remove: boolean // 是否可拖拽
    isDrawGridLines?: boolean // 是否绘制网格线
}


type HandleType = 'drag' | 'resize'

export {
    type LayoutItem,
    type Layout,
    type Parameter,
    type HandleType,
    type DraggableStart,
    type DraggableHandle,
    type DraggableEnd,
    type Removes,
    type propsData
}