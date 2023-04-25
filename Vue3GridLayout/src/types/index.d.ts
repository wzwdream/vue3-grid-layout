interface LayoutItem {
    id: string;
    x: number;
    y: number;
    h: number;
    w: number;
}
type Layout = LayoutItem[];
interface Parameter {
    data: LayoutItem[];
    col: number;
    rowH: number;
    gutter: number;
    drage?: boolean;
    resize?: boolean;
    remove?: boolean;
}
type DraggableStart = (index: string) => void;
type DraggableHandle = (shiftX: number, shiftY: number, handleType?: HandleType) => void;
type DraggableEnd = () => void;
type Removes = (index: string) => void;
interface ProvideData extends Parameter {
    colWidth: number;
    draggableStart: DraggableStart;
    draggableHandle: DraggableHandle;
    draggableEnd: DraggableEnd;
    removes: Removes;
}
type HandleType = 'drag' | 'resize';
export { type LayoutItem, type Layout, type Parameter, type ProvideData, type HandleType, type DraggableStart, type DraggableHandle, type DraggableEnd, type Removes };
