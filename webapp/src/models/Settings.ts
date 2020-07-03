import {ISettings} from '../models/types'
import {store, load} from '../common/local'

const SETTINGS_KEY = 'settings'

export default class Settings {
  static load(): ISettings {
    return {
      ...Settings.getDefaultValues(),
      ...load(SETTINGS_KEY),
    }
  }

  static save(data: Partial<ISettings>) {
    store(SETTINGS_KEY, data)
  }

  static reset() {
    Settings.save(Settings.getDefaultValues())
  }

  static getDefaultValues(): ISettings {
    return {
      theme: 'light',
      clock: '12',
      sendType: false,
      language: 'en',
    }
  }
}
