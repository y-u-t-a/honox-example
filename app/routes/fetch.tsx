import { createRoute } from 'honox/factory'
import FetchButton from '@/components/fetch/$fetchButton'

export default createRoute((c) => {
  return c.render(
    <>
      <title>Fetch</title>
      <h1>Fetch</h1>
      <FetchButton />
    </>
  )
})
