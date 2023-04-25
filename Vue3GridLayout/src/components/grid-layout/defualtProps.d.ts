import { Layout } from '../../types';
import { PropType } from "vue";
export declare const defaultProps: {
    data: {
        type: PropType<Layout>;
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
};
