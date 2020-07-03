import {IState, IUser, IAction, IMessage} from '../models/types'
import {
  SETTINGS_RESET,
  SET_SETTINGS_CLOCK,
  SET_SETTINGS_LANGUAGE,
  SET_SETTINGS_USERNAME,
  SET_SETTINGS_THEME,
  SET_SETTINGS_SENDTYPE,
} from './actionTypes'
import {getSettings, updateUser, getUser as getStorageUser} from '../common/storage'
import {DEFAULT_USER_SETTINGS} from '../common/config'

export const initialState: IState = {
  user: getUser(),
  settings: {
    ...DEFAULT_USER_SETTINGS,
    ...getSettings(),
  },
  messages: [],
}

export default function appReducer(state: IState, action: IAction) {
  switch (action.type) {
    case SETTINGS_RESET:
      return {
        ...state,
        settings: DEFAULT_USER_SETTINGS,
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
    default:
      return state
  }
}

// get stored user or return a default one
function getUser() {
  const user = getStorageUser()
  if (user) {
    return user
  }

  const random = new String(Math.floor(Math.random() * 9999) + 1).padStart(4, '0')
  const newUser: IUser = {
    username: 'user' + random,
  }
  updateUser(newUser)
  return newUser
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
