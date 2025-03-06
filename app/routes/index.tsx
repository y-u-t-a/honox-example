import { createRoute } from "honox/factory"

export default createRoute((c) => {
  return c.render(
    <>
      <title>HonoX Example</title>
      <h1>HonoX Example</h1>
      <ul>
        <li><a href="/counter">Counter</a></li>
        <li><a href="/fetch">Fetch</a></li>
        <li><a href="/call-api">API</a></li>
        <li><a href="/suspence">Suspence</a></li>
      </ul>
    </>
  )
})
