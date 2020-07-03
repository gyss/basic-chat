import {ISettings, IUser} from '../models/types'

const SETTINGS_KEY = 'settings'
const USER_KEY = 'user'

export function getSettings(): Partial<ISettings> {
  const data = window.localStorage.getItem(SETTINGS_KEY)
  return JSON.parse(data)
}

export function updateSetting(data: Partial<ISettings>) {
  const currentSettings = getSettings()
  window.localStorage.setItem(
    SETTINGS_KEY,
    JSON.stringify({
      ...currentSettings,
      ...data,
    }),
  )
}

export function resetSettings() {
  window.localStorage.removeItem(SETTINGS_KEY)
}

export function getUser(): IUser | null {
  const data = window.localStorage.getItem(USER_KEY)
  return JSON.parse(data)
}

export function updateUser(data: Partial<IUser>) {
  const currentUser = getUser()
  window.localStorage.setItem(
    USER_KEY,
    JSON.stringify({
      ...currentUser,
      ...data,
    }),
  )
}
