import {defineConfig} from "vite";
import vue from "@vitejs/plugin-vue";
import {fileURLToPath, URL} from 'node:url'
import viteCompression from "vite-plugin-compression";

export default defineConfig({
    plugins: [
        vue(),
        viteCompression({
            verbose: true,
            disable: false,
            threshold: 10240, // 压缩阈值（字节）
            algorithm: "gzip", // 压缩格式
            ext: ".gz", // 后缀
        }),
    ],
    // 打包选项
    build: {
        chunkSizeWarningLimit: 1500,
        minify: "terser",
        terserOptions: {
            compress: {
                drop_console: true, // 去除打印
                drop_debugger: true, // 去除断点
            },
            mangle: true, // 变量混淆
            format: {
                comments: "false", // all 保留所有注释   false 删除所有注释
                beautify: true, // 生成格式良好的代码
            },
        },
        // 大文件分包
        rollupOptions: {
            output: {
                chunkFileNames: "static/js/[name]-[hash].js",
                entryFileNames: "static/js/[name]-[hash].js",
                assetFileNames: "static/[ext]/[name]-[hash].[ext]",
                manualChunks(id) {
                    if (id.includes("node_modules")) {
                        return id.toString().split("node_modules/")[1].split("/")[0].toString();
                    }
                },
            },
        },
    },
    resolve: {
        alias: {
            // eslint-disable-next-line no-undef
            "@": fileURLToPath(new URL('./src', import.meta.url)), // 解析@为src文件位置
        },
    },
    server:{
        host: "0.0.0.0",
    },
});
