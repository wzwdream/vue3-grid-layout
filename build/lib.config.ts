
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import * as path from 'path';
import { name } from '../package.json'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        dts({
            outputDir: "./dist/types",
            insertTypesEntry: false,
            copyDtsFiles: true
        })
    ],
    build: {
        lib: {
            entry: 'src/Vue3GridLayout/index',
            name: 'vue3GridLayout',
            formats: ['es', 'cjs', 'umd'],
            fileName(format) {
                if (format === 'es') return `${name}.mjs`
                if (format === 'cjs') return `${name}.cjs`
                return `${name}.umd.js`
            }
        },
        rollupOptions: {
            external: ['vue'],
            output: {
                globals: {
                    vue: 'Vue'
                }
            }
        }
    }
})
