const dict : Array<string> = ["income", "outcome", "loan", "investment"]

export function getDict(idx: number) : string {
  return dict[idx]
}

export function getDictCapitalise(idx: number) : string {
  return dict[idx].replace(/(^[a-z])/, (_, p1) => p1.toUpperCase())
}
