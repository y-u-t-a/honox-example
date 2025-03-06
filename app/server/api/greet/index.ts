import { zValidator } from "@hono/zod-validator"
import { Hono } from "hono"
import { z } from "zod"

const validator = {
  GET: zValidator('query',
    z.object({
      name: z.string().optional()
    })
  ),
}

export const greet = new Hono()
.get('/greet', validator.GET, (c) => {
  const { name } = c.req.valid('query')
  const message = name ? `Hi, ${name}!` : 'Hello!'
  return c.json({
    message: message,
  })
})
