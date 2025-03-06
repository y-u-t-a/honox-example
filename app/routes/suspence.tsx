import { createRoute } from 'honox/factory'
import { Suspense } from 'hono/jsx'
import AsyncComponent from '@/components/suspence/AsyncComponent'

export default createRoute((c) => {
  return c.render(
    <>
      <title>Suspence</title>
      <h1>Suspence</h1>
      <Suspense fallback={<>Loading...</>}>
        <AsyncComponent />
      </Suspense>
    </>
  )
})
