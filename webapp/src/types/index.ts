export interface IState {
  user: IUser
  settings: ISettings
  chatView: {
    message: string
    messages: Array<IMessage>
  }
  navigation: {
    unreadMessages: number
  }
}

export interface IUser {
  id: string
  username: string
}

export interface ISettings {
  theme: 'light' | 'dark'
  hourFormat: '12' | '24'
  sendType: boolean
  language: string
}

export interface IMessage {
  id: string
  user: IUser
  timestamp: number
  text: string
}

export interface IAction {
  type: string
  payload?: any
}
