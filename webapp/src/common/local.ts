export function store(key: string, data: Object) {
  const currentData: Object = JSON.parse(window.localStorage.getItem(key) || '{}')
  window.localStorage.setItem(
    key,
    JSON.stringify({
      ...currentData,
      ...data,
    }),
  )
}

export function load(key: string): Object {
  const data = window.localStorage.getItem(key)
  return JSON.parse(data)
}

export function remove(key: string) {
  window.localStorage.removeItem(key)
}
