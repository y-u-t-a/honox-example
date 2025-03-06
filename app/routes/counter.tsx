import { css } from 'hono/css'
import { createRoute } from 'honox/factory'
import Counter from '@/components/counter/$counter'

const className = css`
  font-family: sans-serif;
`

export default createRoute((c) => {
  const name = c.req.query('name') ?? 'Hono'
  const template = (
    <>
      <title>Counter</title>
      <div class={className}>
        <h1>Counter</h1>
        <h2>Hello, {name}!</h2>
        <Counter />
      </div>
    </>
  )
  return c.render(template)
})
