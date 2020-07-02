import {IState, IAction, IMessage} from '../models/types'
import {
  SETTINGS_RESET,
  SET_SETTINGS_CLOCK,
  SET_SETTINGS_LANGUAGE,
  SET_SETTINGS_USERNAME,
  SET_SETTINGS_THEME,
  SET_SETTINGS_SENDTYPE,
} from './actionTypes'

export const initialState: IState = {
  settings: {
    username: 'guest',
    theme: 'light',
    clock: '12',
    sendType: false,
    language: 'en',
  },
  messages: [],
}

export default function appReducer(state: IState, action: IAction) {
  switch (action.type) {
    case SETTINGS_RESET:
      return state
    case SET_SETTINGS_CLOCK:
      return {
        ...state,
        settings: {
          ...state.settings,
          clock: action.payload,
        },
      }
    case SET_SETTINGS_LANGUAGE:
      return {
        ...state,
        settings: {
          ...state.settings,
          language: action.payload,
        },
      }
    case SET_SETTINGS_USERNAME:
      return {
        ...state,
        settings: {
          ...state.settings,
          username: action.payload,
        },
      }
    case SET_SETTINGS_THEME:
      return {
        ...state,
        settings: {
          ...state.settings,
          theme: action.payload,
        },
      }
    case SET_SETTINGS_SENDTYPE:
      return {
        ...state,
        settings: {
          ...state.settings,
          sendType: action.payload,
        },
      }
    default:
      return state
  }
}

function getDummyMessages() {
  const messages: Array<IMessage> = []
  for (let i = 0; i < 20; i++) {
    messages.push({
      id: i,
      user: i % 3 === 0 ? 'yo' : 'xxxxx',
      timestamp: 1593673011,
      text:
        i % 5 === 0
          ? 'Super long message Super long messageSuper long messageSuper long messageSuper long messageSuper long messageSuper long message '
          : 'message',
    })
  }
  return messages
}
