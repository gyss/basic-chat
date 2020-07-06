/** @format */

import * as React from 'react'
import {render, fireEvent, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import ChatView from '../../ChatView'
import Context from '../../../store/Context'
import {initialState} from '../../../store/reducer'
import {SET_CHAT_MESSAGE} from '../../../store/actionTypes'

describe('<Message>', () => {
  test('should render an empty messages list', () => {
    render(
      <Context.Provider value={{dispatch: jest.fn(), globalState: initialState}}>
        <ChatView />
      </Context.Provider>,
    )

    const messageMeta = screen.queryByText('No messages yet')
    expect(messageMeta).toBeInTheDocument()
  })

  test('should call dispatch with the new message', () => {
    const dispatch = jest.fn()
    render(
      <Context.Provider value={{dispatch, globalState: initialState}}>
        <ChatView />
      </Context.Provider>,
    )

    const input = screen.getByPlaceholderText('Enter message')
    fireEvent.change(input, {target: {value: 'Hello world'}})

    fireEvent.click(screen.getByTestId('send-button'))
    expect(dispatch).toHaveBeenCalledTimes(1)
    expect(dispatch).toHaveBeenCalledWith({type: SET_CHAT_MESSAGE, payload: 'Hello world'})
  })
})
