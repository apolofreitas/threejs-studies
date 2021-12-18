export function randInt(low: number, high: number): number {
  return low + Math.floor(Math.random() * (high - low + 1))
}

export function mod(n: number, m: number): number {
  return ((n % m) + m) % m
}
