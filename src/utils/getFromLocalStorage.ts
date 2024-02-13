export function getFromLocalStorage (key: string) {
  const data = window.localStorage.getItem(key)
  if (data == null) {
    return []
  }

  return JSON.parse(data)
}
