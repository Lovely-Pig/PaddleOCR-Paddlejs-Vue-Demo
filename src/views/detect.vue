<template>
  <div class="detect">
    <h1>PaddleOCR Paddle.js Vue Detect</h1>
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
  </div>
</template>

<script>
import * as ocr from '@paddlejs-models/ocrdet'
import { drawBox } from '@/utils/ocrUtils'

export default {
  name: 'Detect',
  data () {
    return {
      img: ''
    }
  },
  async mounted () {
    console.log('loading...')
    const loading = this.$loading({
      lock: true,
      text: '模型加载中......',
      spinner: 'el-icon-loading',
      background: 'rgba(255, 255, 255, 0.95)'
    })
    // 模型初始化
    await ocr.load()
    loading.close()
    console.log('loading OK')
  },
  methods: {
    async detect () {
      const imgElement = this.$refs.image
      const canvasOutput = this.$refs.canvas
      const res = await ocr.detect(imgElement)
      console.log('res:', res)
      drawBox(res, imgElement, canvasOutput)
    },
    handleChange (file) {
      this.img = URL.createObjectURL(file.raw)
      setTimeout(() => {
        this.detect()
      }, 600)
    }
  }
}
</script>

<style lang="scss">
.detect {
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
}
</style>
