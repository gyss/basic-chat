import * as React from 'react'

import { IState, IAction } from '../models/types'
import { initialState } from './reducer';

const Context = React.createContext<{
  globalState: IState,
  dispatch: React.Dispatch<IAction>
}>(undefined);

export default Context;