import { Parameter, LayoutItem, HandleType } from '../types/index';
declare const useDrage: (data: Parameter) => {
    dragData: {
        data: {
            id: string;
            x: number;
            y: number;
            h: number;
            w: number;
        }[];
        col: number;
        rowH: number;
        gutter: number;
        drage?: boolean | undefined;
        resize?: boolean | undefined;
        remove?: boolean | undefined;
    };
    draggableStart: (id: string) => void;
    draggableHandle: (shiftX: number, shiftY: number, colWidth: number, handleType?: HandleType) => {
        newData: {
            id: string;
            x: number;
            y: number;
            h: number;
            w: number;
        }[];
        newItem: {
            id: string;
            x: number;
            y: number;
            h: number;
            w: number;
        };
    };
    draggableEnd: () => void;
    drageItem: {
        x: number;
        y: number;
        h: number;
        w: number;
    };
    isDraging: import("vue").Ref<boolean>;
    dragingstyle: import("vue").ComputedRef<{
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
    }>;
    removes: (id: string) => void;
    propsId: import("vue").Ref<string>;
    dragingData: import("vue").ComputedRef<{
        index: number;
        data: LayoutItem;
    }>;
};
export default useDrage;
