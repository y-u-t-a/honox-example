import { createRoute } from 'honox/factory'
import { Suspense } from 'hono/jsx'
import CallApi from '@/components/api/$callApi'
import { greet, asyncGreet } from '@/server/actions/greet'

export default createRoute((c) => {
  const name = c.req.query('name')
  return c.render(
    <>
      <title>API</title>
      <h1>API</h1>
      <h4>Server Action</h4>
      <ServerComponent name={name} />
      <br/>
      <h4>Async Server Action</h4>
      <Suspense fallback={<>Loading...</>}>
        <AsyncServerComponent name={name} />
      </Suspense>
      <br/>
      <h4>Call API</h4>
      <CallApi name={name} />
    </>
  )
})

interface ServerComponent {
  name?: string
}
function ServerComponent(props: ServerComponent) {
  const g = greet(props.name)
  return (<span>{ g }</span>)
}
async function AsyncServerComponent(props: ServerComponent) {
  const g = await asyncGreet(props.name)
  return (<span>{ g }</span>)
}