/*
  Since this test is quite simple I decided to use React Context API.
  I used React Hooks useReducer, useContext to fetch data from the store and to dispatch actions.
  Unfortunately there's a drawback on this approach: I cannot access the store or to the dispatch.
  A clear example of this problem is when a new message from the chatSocket is received, it should
  access user data and dispatch and action.

  For testing purposes I decided to move forward with this approach instead of using Redux.
*/
import * as React from 'react'
import {IAction, IState} from '../types'

let _dispatch: React.Dispatch<IAction>
let _globalState: IState

export default function expose(dispatch: React.Dispatch<IAction>, globalState: IState) {
  _dispatch = dispatch
  _globalState = globalState
}

export function getContext() {
  return {dispatch: _dispatch, globalState: _globalState}
}
