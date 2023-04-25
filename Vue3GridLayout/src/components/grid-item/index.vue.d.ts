import { LayoutItem, HandleType } from '../../types/index';
declare const _sfc_main: import("vue").DefineComponent<{
    id: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
}, {
    layoutData: import("../../types/index").ProvideData | undefined;
    layout: import("vue").ComputedRef<{
        xStart: number;
        yStart: number;
        xEnd: number;
        yEnd: number;
        width: string;
        height: string;
        data: LayoutItem | undefined;
    }>;
    style: {
        width: string;
        height: string;
        transform: string;
    };
    isDraging: import("vue").Ref<boolean>;
    handleType: import("vue").Ref<HandleType | undefined>;
    draggableStart: (e: PointerEvent, type?: HandleType) => void;
    removes: () => void;
}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    id: {
        type: StringConstructor;
        require: boolean;
        default: string;
    };
}>>, {
    id: string;
}>;
export default _sfc_main;
