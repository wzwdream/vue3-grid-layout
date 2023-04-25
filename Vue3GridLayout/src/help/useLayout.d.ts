declare const useDrage: () => {
    colWidth: import("vue").Ref<number>;
    rowHeight: import("vue").Ref<number>;
    layoutStyle: {
        gridTemplateColumns: string;
        gridAutoRows: string;
        gap: string;
        height: string;
    };
    updateStyle: (col: number, rowH: number, gutter: number) => void;
};
export default useDrage;
