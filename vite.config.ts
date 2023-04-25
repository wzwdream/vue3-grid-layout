
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import dts from 'vite-plugin-dts'
import * as path from 'path';
import { name } from './package.json'

export default defineConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src')
        }
    },
    plugins: [
        vue(),
        dts({
            outputDir: 'dist/Vue3GridLayout',
            include: [
                './src/types/index.ts',
                './src/components/**/*.vue',
                './src/components/Vue3GridLayout.ts'
            ]
        })
    ],
    build: {
        lib: {
            entry: 'src/components/Vue3GridLayout.ts',
            name: 'vue3GridLayout',
            formats: ['es', 'cjs', 'umd'],
            fileName(format) {
                switch (format) {
                    case 'es': {
                        return `${name}.mjs`;
                    }
                    case 'cjs': {
                        return `${name}.cjs`;
                    }
                    case 'umd': {
                        return `${name}.umd.js`;
                    }
                }
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
