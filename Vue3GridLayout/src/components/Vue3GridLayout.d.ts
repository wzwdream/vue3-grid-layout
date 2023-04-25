import { App } from 'vue';
import GridLayout from './grid-layout/index.vue';
import GridItem from './grid-item/index.vue';
declare const Vue3GridLayout: {
    install: (app: App) => void;
};
export default Vue3GridLayout;
export type GridLayoutInstance = InstanceType<typeof GridLayout>;
export type GridItemInstance = InstanceType<typeof GridItem>;
export * from '../types/index';
