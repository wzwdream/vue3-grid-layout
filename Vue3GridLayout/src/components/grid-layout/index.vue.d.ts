declare const _sfc_main: import("vue").DefineComponent<{
    data: {
        type: import("vue").PropType<import("../../types/index").Layout>;
        require: boolean;
        default: () => never[];
    };
    col: {
        type: NumberConstructor;
        default: number;
    };
    rowH: {
        type: NumberConstructor;
        default: number;
    };
    drage: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    remove: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    isDrawGridLines: {
        type: BooleanConstructor;
        default: boolean;
    };
}, {
    layoutStyle: {
        gridTemplateColumns: string;
        gridAutoRows: string;
        gap: string;
        height: string;
    };
    dragingstyle: import("vue").ComputedRef<{
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
    }>;
    isDraging: import("vue").Ref<boolean>;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, ("update:data" | "draggableStart" | "draggableHandle" | "draggableEnd" | "remove")[], "update:data" | "draggableStart" | "draggableHandle" | "draggableEnd" | "remove", import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    data: {
        type: import("vue").PropType<import("../../types/index").Layout>;
        require: boolean;
        default: () => never[];
    };
    col: {
        type: NumberConstructor;
        default: number;
    };
    rowH: {
        type: NumberConstructor;
        default: number;
    };
    drage: {
        type: BooleanConstructor;
        default: boolean;
    };
    resize: {
        type: BooleanConstructor;
        default: boolean;
    };
    remove: {
        type: BooleanConstructor;
        default: boolean;
    };
    gutter: {
        type: NumberConstructor;
        default: number;
    };
    isDrawGridLines: {
        type: BooleanConstructor;
        default: boolean;
    };
}>> & {
    "onUpdate:data"?: ((...args: any[]) => any) | undefined;
    onDraggableStart?: ((...args: any[]) => any) | undefined;
    onDraggableHandle?: ((...args: any[]) => any) | undefined;
    onDraggableEnd?: ((...args: any[]) => any) | undefined;
    onRemove?: ((...args: any[]) => any) | undefined;
}, {
    remove: boolean;
    data: import("../../types/index").Layout;
    col: number;
    rowH: number;
    drage: boolean;
    resize: boolean;
    gutter: number;
    isDrawGridLines: boolean;
}>;
export default _sfc_main;
