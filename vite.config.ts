import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const config = defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        indexAnimated: resolve(__dirname, 'index-animated.html'),
        manifesto: resolve(__dirname, 'manifesto.html'),
        nfts: resolve(__dirname, 'nfts.html'),
        brandAssets: resolve(__dirname, 'brand-assets.html'),
        modals: resolve(__dirname, 'modals.html'),
      },
    },
  },
})

export default config
