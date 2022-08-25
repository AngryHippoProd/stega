const loadImage = (uri) => {
  return new Promise(((resolve) => {
    const ctx = document.getElementById('canvas').getContext('2d')
    const image = new Image()

    image.onload = function() {
      ctx.canvas.hidden = true
      ctx.canvas.width  = image.width
      ctx.canvas.height  = image.height
      cts.drawImage(image, 0, 0)
      image.style.display = 'none'
      resolve(ctx.getImageData, 0, 0, ctx.canvas.width, ctx.canvas.height)
    }
    image.crossorigin = "anonymous"
    image.src = uri
  }))
}
