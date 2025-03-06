import { apiClient } from "@/utils/apiClient"
import { useState } from "hono/jsx"

export default function CallApi(props: { name?: string }) {
  const [ message, setMessage ] = useState<string>()
  const [ loading, setLoading ] = useState(false)

  const fetchPost = async () => {
    setLoading(true)
    const json = await (
      await apiClient.greet.$get({ query: { name: props.name } })
    ).json()
    setMessage(json.message)
    setLoading(false)
  }

  return (
    <>
      <button onClick={fetchPost} disabled={loading}>Fetch</button>
      <button onClick={() => setMessage("")}>Rest</button>
      <br/>
      <span>message: {message}</span>
    </>
  )
}
