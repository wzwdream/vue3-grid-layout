import { Layout } from "../types";
import { PropType } from "vue";

export const defaultProps = {
    data: {
        type: Array as PropType<Layout>,
        require: true,
        default: () => []
    },
    col: {
        type: Number,
        default: 12
    },
    rowH: {
        type: Number,
        default: 50
    },
    drage: {
        type: Boolean,
        default: true
    },
    resize: {
        type: Boolean,
        default: true
    },
    remove: {
        type: Boolean,
        default: true
    },
    gutter: {
        type: Number,
        default: 10
    },
    isDrawGridLines: {
        type: Boolean,
        default: true
    }
}