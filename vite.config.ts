import honox from 'honox/vite'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [honox()],
  resolve: {
    alias: [
      { find: '@/', replacement: `${__dirname}/app/` }
    ]
  }
})
