import { Layout } from "../types";
/**
 * 计算每一列的宽度
 * @param col 列数
 * @param gutter 间距
 * @param boxWidth 容器宽度
 * @returns 每列的宽度
 */
export declare const calcColWidth: (col: number, gutter: number, boxWidth: number) => number;
/**
 * 计算布局的高度
 * @param rowH 每列高度
 * @param gutter 间距
 * @param layout 布局数据
 * @returns 计算的高度
 */
export declare const calcHeight: (rowH: number, gutter: number, layout: Layout) => number;
/**
 * 计算边界值-以x,y,h,w计算，计算再边界内的合法值
 * @param initNumber 初始值
 * @param moveNumber 移动距离
 * @param gapNumbe 元素本身高度/宽度
 * @param boundaryNumber 边界值-边界值为0时表示没有边界
 * @returns 移动后的值
 */
export declare const calcBoundary: (initNumber: number, moveNumber: number, gapNumber: number, boundaryNumber?: number) => number;
/**
 * 根据id查找index
 * @param layout 数据
 * @param id 需要查找的id值
 * @returns 返回查找到的数据index
 */
export declare const findIndexById: (layout: Layout, id: string) => {
    index: number;
    data: import("../types").LayoutItem;
};
/**
 * 绘制网格线
 * @param canvas canvas实列
 * @param height 高度
 * @param width 宽度
 * @param colWidth 列宽
 * @param rowH 行高
 * @param gutter 间距
 */
export declare const drawGridLines: (canvas: HTMLCanvasElement, height: number, width: number, colWidth: number, rowH: number, gutter: number) => void;
/**
 * 深克隆函数
 * @param obj 需要拷贝的元素
 * @param cache 用来缓存的对象
 * @returns 返回拷贝的对象
 */
export declare const deepClone: <T>(obj: T, cache?: WeakMap<object, any>) => T;
