/** @format */

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ChatView from '../../ChatView'
import Context from '../../../store/Context'
import {initialState} from '../../../store/reducer'
import {SET_CHAT_MESSAGE} from '../../../store/actionTypes'

describe('<Message>', () => {
  test('should call dispatch when user clicks on send button', () => {
    const dispatch = jest.fn()
    render(
      <Context.Provider value={{dispatch, globalState: initialState}}>
        <ChatView />
      </Context.Provider>,
    )

    const input = screen.getByPlaceholderText('Enter message')
    fireEvent.change(input, {target: {value: 'Hello world'}})
    expect(dispatch).toHaveBeenLastCalledWith({type: SET_CHAT_MESSAGE, payload: 'Hello world'})
  })

  test("should not call dispatch when user clicks on send button and there's no message", () => {
    const dispatch = jest.fn()
    render(
      <Context.Provider value={{dispatch, globalState: initialState}}>
        <ChatView />
      </Context.Provider>,
    )

    fireEvent.click(screen.getByTestId('send-button'))
    expect(dispatch).toHaveBeenCalledTimes(0)
  })
})
