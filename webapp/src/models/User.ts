import {IUser} from '../types'
import {store, load} from '../common/local'

const USER_KEY = 'user'

export default class User {
  static load(): IUser {
    const localUser = load(USER_KEY) as IUser
    if (localUser) {
      return localUser
    }

    const newUser: IUser = {
      id: User.generateGUID(),
      username: User.generateRandomUsername(),
    }
    User.save(newUser)
    return newUser
  }

  static save(data: Partial<IUser>) {
    store(USER_KEY, data)
  }

  private static generateGUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0,
        v = c == 'x' ? r : (r & 0x3) | 0x8
      return v.toString(16)
    })
  }

  private static generateRandomUsername() {
    const random = new String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0')
    return 'user' + random
  }
}
