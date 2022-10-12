import path from 'path';
import vue from '@vitejs/plugin-vue2';

export default {
    plugins: [vue()],
    resolve: {
        alias: {
            vue: 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src'),
        }
    }
};
