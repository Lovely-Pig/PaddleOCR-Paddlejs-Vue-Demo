<template>
  <div class="recognize">
    <h1>PaddleOCR Paddle.js Vue Recognize</h1>
    <el-upload
      class="upload-demo"
      action="abc"
      :auto-upload="false"
      :on-change="handleChange"
      :show-file-list="false">
      <el-button size="medium" type="primary">上传图片<i class="el-icon-upload el-icon--right"></i></el-button>
    </el-upload>
    <img ref="image" :src="img" />
    <canvas ref="canvas"></canvas>
    <div ref="text" class="text" :style="textStyle">
      <p v-for="(text, index) in texts" :key="index">{{ text }}</p>
    </div>
  </div>
</template>

<script>
import * as ocr from '@paddlejs-models/ocr'
import { drawBox } from '@/utils/ocrUtils'

export default {
  name: 'Recognize',
  data () {
    return {
      img: '',
      texts: [],
      textStyle: {
        width: '',
        height: ''
      },
      loadSuccess: false
    }
  },
  async mounted () {
    this.timer = setInterval(() => {
      this.$notify({
        title: '注意',
        message: '若长时间未加载成功可以手动刷新页面',
        type: 'warning'
      })
    }, 13000)
    console.log('loading')
    const loading = this.$loading({
      lock: true,
      text: '模型加载中......',
      spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 0.95)'
    })
    try {
      // 模型初始化
      await ocr.init()
      this.loadSuccess = true
      loading.close()
      clearInterval(this.timer)
      console.log('loading OK')
    } catch (err) {
      console.log('loading err')
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
  },
  methods: {
    async recognize () {
      const imgElement = this.$refs.image
      const canvasOutput = this.$refs.canvas

      const res = await ocr.recognize(imgElement)
      console.log('res:', res)
      const { text, points } = res
      drawBox(points, imgElement, canvasOutput)
      this.textStyle.width = imgElement.width - 40 + 'px'
      this.texts = text
    },
    handleChange (file) {
      this.img = URL.createObjectURL(file.raw)
      setTimeout(() => {
        this.recognize()
      }, 600)
    }
  }
}
</script>

<style lang="scss">
.recognize {
  h1 {
    font-size: 50px;
    text-align: center;
  }

  .upload-demo {
    margin-top: 20px;
    text-align: center;

    .el-button {
      border-radius: 10px;
      font-size: 20px;
    }
  }

  img {
    height: 500px;
    // background-color: #000;
    display: block;
    margin: auto;
    margin-top: 20px;
  }

  canvas {
    display: block;
    margin: auto;
    margin-top: 50px;
  }

  .text {
    margin: auto;
    margin-top: 50px;
    padding: 20px;
    border: 1.5px solid #7e7e7e;
    border-radius: 10px;

    p {
      font-size: 25px;
    }
  }
}
</style>
