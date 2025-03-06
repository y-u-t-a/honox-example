import { useState } from 'hono/jsx'
import { css } from 'hono/css'

const className = css`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export default function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>{count}</p>
      <div class={className}>
        <button onClick={() => setCount(count - 1)}>-1</button>
        <button onClick={() => setCount(0)}>reset</button>
        <button onClick={() => setCount(count + 1)}>+1</button>
      </div>
    </div>
  )
}
