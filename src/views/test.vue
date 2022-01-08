<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <input type="file" @change="change" />
    <img ref="image" :src="img" />
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import * as ocr from '@paddlejs-models/ocrdet'

export default {
  name: 'Test',
  data () {
    return {
      msg: 'Paddle.js PaddleOCR Detection',
      img: ''
    }
  },
  async mounted () {
    console.log('start to recognize')
    // 模型初始化
    await ocr.load()
    console.log('load OK')
  },
  methods: {
    async recognize () {
      const imgElement = this.$refs.image
      const res = await ocr.detect(imgElement)
      console.log('res:', res)
      this.drawBox(res)
    },
    change (e) {
      const src = URL.createObjectURL(e.target.files[0])
      console.log('src:', src)
      this.img = src
      setTimeout(() => {
        this.recognize()
      }, 600)
    },
    drawBox (points) {
      const imgElement = this.$refs.image
      const canvasOutput = this.$refs.canvas
      canvasOutput.width = imgElement.naturalWidth
      canvasOutput.height = imgElement.naturalHeight

      const ctx = canvasOutput.getContext('2d')
      ctx.drawImage(imgElement, 0, 0, canvasOutput.width, canvasOutput.height)
      points.forEach(point => {
        // 开始一个新的绘制路径
        ctx.beginPath()
        // 设置线条颜色为蓝色
        ctx.strokeStyle = 'blue'
        // 设置路径起点坐标
        ctx.moveTo(point[0][0], point[0][1])
        ctx.lineTo(point[1][0], point[1][1])
        ctx.lineTo(point[2][0], point[2][1])
        ctx.lineTo(point[3][0], point[3][1])
        ctx.closePath()
        ctx.stroke()
      })
    }
  }
}
</script>

<style>
</style>
