import { asyncGreet } from "@/server/actions/greet"

export default async function AsyncServerComponent(props: { name?: string }) {
  const g = await asyncGreet(props.name)
  return (<span>{ g }</span>)
}