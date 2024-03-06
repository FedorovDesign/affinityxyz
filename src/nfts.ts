document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.card-video')

  videos.forEach(async el => {
    if (el instanceof HTMLVideoElement) {
      try {
        el.muted = true
        el.controls = false
        el.loop = true
        el.autoplay = true
        await el.play()
      } catch (error) {
        console.error('Autoplay was prevented:', error)
      }
    }
  })
})
