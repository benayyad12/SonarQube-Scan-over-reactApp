import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { urlJO } from './src/constants/url'

// https://vitejs.dev/config/
export default defineConfig({

  plugins: [react()],
})
