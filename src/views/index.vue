<template>
  <div class="index">
    <div class="text">PaddleOCR Paddle.js Vue Demo</div>
    <el-carousel height="700px" arrow="never" :interval="6000">
      <el-carousel-item v-for="(item, index) in dataList" :key="index">
        <div class="carousel-item" @click="click(item.url)">
          <div class="item-left">
            <div class="title-text">{{item.title}}</div>
            <div class="little-text">{{item.little}}</div>
            <div class="button">{{item.button}}</div>
          </div>
          <div class="item-right">
            <img :src="item.img">
          </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
module.exports = {
  name: 'Index',
  data () {
    return {
      dataList: [{
        title: 'PaddleOCR',
        little: 'PaddleOCR旨在打造一套丰富、领先、且实用的OCR工具库，助力开发者训练出更好的模型，并应用落地。',
        button: '点击查看',
        img: '/static/PaddleOCR.png',
        url: 'https://github.com/PaddlePaddle/PaddleOCR'
      }, {
        title: 'Detect',
        little: '文本检测',
        button: '点击体验',
        img: '/static/detect.png',
        url: '/det'
      }, {
        title: 'Paddle.js',
        little: 'Paddle.js 是百度 PaddlePaddle 的 web 方向子项目，是一个运行在浏览器中的开源深度学习框架。',
        button: '点击查看',
        img: '/static/Paddlejs.png',
        url: 'https://github.com/PaddlePaddle/Paddle.js'
      }, {
        title: 'Recognize',
        little: '文本识别',
        button: '点击体验',
        img: '/static/recognize.jpeg',
        url: '/rec'
      }]
    }
  },
  methods: {
    click (url) {
      if (/http/i.test(url)) {
        window.open(url, '_blank')
      } else {
        this.$router.push({ path: url })
      }
    }
  }
}
</script>

<style lang="scss">
.index {
  .text {
    padding: 10px 0;
    text-align: center;
    font-size: 50px;
    color: #fff;
    background-color: #2932e1;
  }

  .el-carousel {
    cursor: pointer;

    .carousel-item {
      height: 100%;
      display: flex;
      /* justify-content: ; */
      align-items: center;
      color: #fff;

      .item-left {
        width: 500px;
        padding: 20px;
        margin-left: 60px;
        // background-color: #d1541a;

        .title-text {
          font-size: 50px;
          font-weight: 700;
        }

        .little-text {
          margin-top: 10px;
          font-size: 20px;
        }

        .button {
          width: 100px;
          height: 25px;
          margin-top: 30px;
          padding: 4px;
          text-align: center;
          border: 1.5px solid #fff;
          border-radius: 20px;
        }
      }

      .item-right {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 800px;
        height: 500px;
        margin-left: 30px;
        // background-color: #ffe4c4;

        img {
          max-width: 100%;
        }
      }
    }
  }
}

.el-carousel__item:nth-child(2n) {
  background-color: #004ffe;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #0a6cff;
}
</style>
