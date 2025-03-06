import { useEffect, useState } from "hono/jsx"

export default function FetchButton() {

  const [ res, setRes ] = useState<any>()
  const [ id, setId ] = useState(1)
  const [ loading, setLoading ] = useState(false)

  const changeId = () => {
    setId(Math.floor(Math.random() * 99) + 1)
  }

  const fetchPost = async () => {
    setLoading(true)
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    const data = await response.json()
    setRes(data)
    setLoading(false)
  }

  useEffect(() => {
    setRes(undefined)
    fetchPost()
  }, [id])

  return (
    <>
      <button onClick={changeId} disabled={loading}>Fetch</button>
      <pre>
        {
          loading
            ? "loading..."
            : JSON.stringify(res, null, 2)
        }
      </pre>
    </>
  )
}
