export function getKeyNam(...args: string[]) {
  return `bites:${args.join(":")}`
}
