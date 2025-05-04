import { createRoute } from 'honox/factory'
import { Suspense } from 'hono/jsx'
import CallApi from '@/components/call-api/$callApi'
import ServerComponent from '@/components/call-api/serverComponent'
import AsyncServerComponent from '@/components/call-api/asyncServerComponent'

export default createRoute((c) => {
  const name = c.req.query('name')
  return c.render(
    <>
      <title>API</title>
      <h1>API</h1>

      <form method='get'>
        <label for='name'>name: </label>
        <input name='name' />
        <button type='submit'>submit</button>
      </form>

      <h4>Server Action</h4>
      <ServerComponent name={name} />
      <br/>

      <h4>Async Server Action</h4>
      <p>API のレスポンスが返ってくる 2秒後にレンダリングされる</p>
      <Suspense fallback={<>Loading...</>}>
        <AsyncServerComponent name={name} />
      </Suspense>
      <br/>

      <h4>Call API</h4>
      <CallApi name={name} />
    </>
  )
})
