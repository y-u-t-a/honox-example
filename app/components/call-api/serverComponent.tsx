import { greet } from "@/server/actions/greet"

export default function ServerComponent(props: { name?: string }) {
  const g = greet(props.name)
  return (<span>{ g }</span>)
}