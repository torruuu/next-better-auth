import { defineConfig } from '@hey-api/openapi-ts'
import { config } from 'dotenv'

config()

export default defineConfig({
  input: `${process.env.API_BASE}/docs`,
  output: 'src/client',
  plugins: [
    { name: '@hey-api/client-fetch', baseUrl: process.env.API_BASE },
    { name: '@tanstack/react-query' },
  ],
})
