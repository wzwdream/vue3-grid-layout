import { Layout, LayoutItem } from '../types/index';
/**
 * 布局项是否发生了位置、大小变化
 * @param oldItem 原始数据
 * @param newItem 变化后的数据
 * @returns 判断结果
 */
export declare const isLayoutChanged: (oldItem: LayoutItem, newItem: LayoutItem) => boolean;
/**
 * 判断两个矩形是否相交
 * @param rect1 第一个item
 * @param rect2 第二个item
 * @returns 判断结果 true-相交 false-不相交
 */
export declare const isOverlap: ({ x: x1, y: y1, w: w1, h: h1 }: LayoutItem, { x: x2, y: y2, w: w2, h: h2 }: LayoutItem) => boolean;
/**
 * 碰撞检测
 * @param layout 布局数据
 * @param newItem 检测的item
 * @returns 检测结果
 */
export declare const collisionDetection: (layout: Layout, newItem: LayoutItem) => boolean;
/**
 * 碰撞规避（只针对单个布局项）
 * @param layout 布局数据
 * @param itemId 做规避的元素id
 * @param col 布局的列数
 * @returns 重新计算后的布局数据
 */
export declare const collisionAvoidanceForItem: (layout: Layout, itemId: string, col: number) => Layout;
/**
 * 获取所有与指定布局项发生碰撞的布局项的索引
 * @param layout 布局数据
 * @param item 当前移动的item
 * @returns 所有与当前移动的item发生碰撞的布局项的id
 */
export declare const getCollidingIndexes: (layout: Layout, item: LayoutItem) => string[];
/**
 * 碰撞规避（针对多个布局项）
 * @param layout 布局数据
 * @param itemIndexs 所有与指定item发生碰撞的布局项的索引
 * @param col 布局的列数
 * @returns 新的布局数据
 */
export declare const collisionAvoidanceForItems: (layout: Layout, itemIds: string[], col: number) => Layout;
