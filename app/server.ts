import { createApp } from 'honox/server'
import { showRoutes } from 'hono/dev'
import { Hono } from 'hono'
import { greet } from '@/server/api/greet'

const apiRoutes = new Hono()
  .route('/api', greet)

const app = new Hono()
  .route('/', apiRoutes) // パス解決の優先順位的に先に apiRoutes を登録する必要がある
  .route('/', createApp()) // HonoX が生成するルーティング

showRoutes(app)

export default app

export type ApiRoutes = typeof apiRoutes
