export function greet(name?: string) {
  return name ? `Hi, ${name}!` : 'Hello!'
}

export async function asyncGreet(name?: string) {
  await new Promise(_ => setTimeout(_, 2000));
  return name ? `Hi, ${name}!` : 'Hello!'
}
