export default async function AsyncComponent() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await response.json()

  await new Promise(_ => setTimeout(_, 2000))

  return (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  )
}