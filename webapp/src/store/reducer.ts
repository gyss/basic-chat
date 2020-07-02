import {IState, IAction} from '../models/types'
import {
  SETTINGS_RESET
} from './actions'

export const initialState: IState = {
  settings: {
    username: 'guest',
    theme: 'light',
    clock: '12',
    sendType: false,
    language: 'en'
  },
  messages: []
}

/*
for (let i=0; i<20;i++) {
  initialState.messages.push({
    id: i,
    user: i % 3 === 0 ? 'yo' : 'xxxxx',
    timestamp: 1593673011,
    text: i % 5 === 0 ? 'Super long message Super long messageSuper long messageSuper long messageSuper long messageSuper long messageSuper long message ' : 'message'
  },)
}
*/


export default function appReducer(state: IState, action: IAction) {
  switch (action.type) {
    case SETTINGS_RESET:

      break
    default:
      return state
  }
}