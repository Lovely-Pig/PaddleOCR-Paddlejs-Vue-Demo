# PaddleOCR Paddle.js Vue Demo

> 使用 Paddle.js 和 Vue 部署 PaddleOCR 应用

体验地址：<http://39.106.32.208:8888>

## 介绍

1. PaddleOCR

   官网

   - <https://github.com/PaddlePaddle/PaddleOCR>

   官方介绍

   > PaddleOCR旨在打造一套丰富、领先、且实用的OCR工具库，助力开发者训练出更好的模型，并应用落地。

2. Paddle.js

   官网

   - <https://github.com/PaddlePaddle/Paddle.js>

   官方介绍

   > Paddle.js 是百度 PaddlePaddle 的 web 方向子项目，是一个运行在浏览器中的开源深度学习框架。

## 开发步骤

### 1 创建 Vue 项目

```sh
$ vue init webpack PaddleOCR-Paddlejs-Vue-Demo
```

### 2 安装依赖

```sh
$ npm install
```

### 3 安装Element-UI

```sh
$ npm install element-ui --save
```

### 4 安装 ocr 和 ocrdet

```sh
$ npm install @paddlejs-models/ocrdet@0.0.3 --save
$ npm install @paddlejs-models/ocr@1.1.2 --save
```

### 5 运行

```sh
$ npm run dev
```
