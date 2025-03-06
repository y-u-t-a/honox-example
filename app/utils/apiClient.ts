import { ApiRoutes } from '@/server'
import { hc } from 'hono/client'

export const apiClient = hc<ApiRoutes>("/").api
