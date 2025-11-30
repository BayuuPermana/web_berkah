import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/**
 * Vite configuration file.
 *
 * Configures the build tool, including plugins and server options.
 *
 * @see https://vite.dev/config/
 */
export default defineConfig({
  plugins: [react()],
})
