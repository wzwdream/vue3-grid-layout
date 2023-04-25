import { App } from 'vue'
import GridLayout from './grid-layout/index.vue'
import GridItem from './grid-item/index.vue'
const Vue3GridLayout = {
    install: (app: App) => {
        app.component('grid-layout', GridLayout)
        app.component('grid-item', GridItem)
    }
}
export default Vue3GridLayout