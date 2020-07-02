import * as React from 'react'

import {IState, IAction} from '../models/types'

const Context = React.createContext<{
  globalState: IState
  dispatch: React.Dispatch<IAction>
}>(undefined)

export default Context
