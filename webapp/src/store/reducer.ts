import {IState, IAction, IMessage} from '../types'
import {
  SETTINGS_RESET,
  SET_SETTINGS_CLOCK,
  SET_SETTINGS_LANGUAGE,
  SET_SETTINGS_USERNAME,
  SET_SETTINGS_THEME,
  SET_SETTINGS_SENDTYPE,
  SEND_CHAT_MESSAGE,
  SET_CHAT_MESSAGE,
  RECEIVE_CHAT_MESSAGE,
} from './actionTypes'

import User from '../models/User'
import Settings from '../models/Settings'

export const initialState: IState = {
  user: User.load(),
  settings: Settings.load(),
  chatView: {
    message: '',
    messages: [],
  },
}

export default function appReducer(state: IState, action: IAction) {
  switch (action.type) {
    case SETTINGS_RESET:
      return {
        ...state,
        settings: Settings.getDefaultValues(),
      }
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
    case SET_CHAT_MESSAGE:
      return {
        ...state,
        chatView: {
          ...state.chatView,
          message: action.payload,
        },
      }
    case SEND_CHAT_MESSAGE:
      return {
        ...state,
        chatView: {
          messages: [...state.chatView.messages, action.payload.message],
          message: '',
        },
      }

    case RECEIVE_CHAT_MESSAGE:
      return state

    default:
      return state
  }
}

function getDummyMessages() {
  const messages: Array<IMessage> = []
  for (let i = 0; i < 20; i++) {
    messages.push({
      id: 'message' + i,
      user: {
        id: i % 3 === 0 ? 'yo' : 'otro',
        username: i % 3 === 0 ? 'yo' : 'otro',
      },
      timestamp: 1593673011,
      text:
        i % 5 === 0
          ? 'Super long message Super long messageSuper long messageSuper long messageSuper long messageSuper long messageSuper long message '
          : 'message',
    })
  }
  return messages
}
