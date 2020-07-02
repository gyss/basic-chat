export interface ISettings {
  username: string
  theme: 'light'|'dark'
  clock: '12'|'24'
  sendType: boolean,
  language: string
}

export interface IMessage {
  id: number
  user: string
  timestamp: number
  text: string
}

export interface IState {
  settings: ISettings
  messages: Array<IMessage>
}

export interface IAction {
  type: string
  payload: any
}