export function drawBox (points, imgElement, canvasOutput) {
  canvasOutput.width = imgElement.width
  canvasOutput.height = imgElement.height
  const ratio = imgElement.naturalHeight / imgElement.height

  const ctx = canvasOutput.getContext('2d')
  ctx.drawImage(imgElement, 0, 0, canvasOutput.width, canvasOutput.height)
  points.forEach(point => {
    // 开始一个新的绘制路径
    ctx.beginPath()
    // 设置线条颜色为红色
    ctx.strokeStyle = 'red'
    // 设置路径起点坐标
    ctx.moveTo(point[0][0] / ratio, point[0][1] / ratio)
    ctx.lineTo(point[1][0] / ratio, point[1][1] / ratio)
    ctx.lineTo(point[2][0] / ratio, point[2][1] / ratio)
    ctx.lineTo(point[3][0] / ratio, point[3][1] / ratio)
    ctx.closePath()
    ctx.stroke()
  })
}

export function drawText (text, points, imgElement, canvasOutput) {
  canvasOutput.width = imgElement.width
  canvasOutput.height = imgElement.height
  const ratio = imgElement.naturalHeight / imgElement.height

  const ctx = canvasOutput.getContext('2d')
  points.forEach((point, index) => {
    // 开始一个新的绘制路径
    ctx.beginPath()
    // 设置线条颜色为红色
    ctx.strokeStyle = 'red'
    // 设置路径起点坐标
    ctx.moveTo(point[0][0] / ratio, point[0][1] / ratio)
    ctx.lineTo(point[1][0] / ratio, point[1][1] / ratio)
    ctx.lineTo(point[2][0] / ratio, point[2][1] / ratio)
    ctx.lineTo(point[3][0] / ratio, point[3][1] / ratio)
    ctx.closePath()
    ctx.stroke()

    ctx.font = '30px 黑体'
    ctx.fillText(text[index], point[3][0] / ratio, point[3][1] / ratio, point[1][0] / ratio - point[0][0] / ratio)
  })
}
