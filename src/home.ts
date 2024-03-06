import '@splinetool/viewer'
import KeenSlider from 'keen-slider'
import 'keen-slider/keen-slider.min.css'

document.addEventListener('DOMContentLoaded', () => {
  if (window && window.innerWidth < 640) {
    const sliders = ['slider-1', 'slider-2']

    for (const containerId of sliders) {
      const container = document.getElementById(containerId)

      if (container instanceof HTMLDivElement) {
        const children = Array.from(container.children)

        for (const child of children) {
          if (child instanceof HTMLDivElement) {
            child.classList.add('keen-slider__slide')
          }
        }

        container.classList.add('keen-slider')
      }

      new KeenSlider(
        `#${containerId}`,
        {
          loop: true,
        },
        [],
      )
    }
  }
})
