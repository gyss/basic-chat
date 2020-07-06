/** @format */

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import MessagesList, {IProps} from '../../ChatView/MessagesList'

describe('<MessagesList>', () => {
  let props: IProps

  beforeEach(() => {
    props = {
      messages: [],
      userId: 'my-user-id',
    }
  })

  test('should render an empty list', () => {
    render(<MessagesList {...props} />)
    const noMessages = screen.queryByText('No messages yet')
    expect(noMessages).toBeInTheDocument()
  })

  test('should render one message', () => {
    render(
      <MessagesList
        {...props}
        messages={[
          {
            id: '1',
            user: {
              id: '1',
              username: 'Pepe',
            },
            timestamp: 1594037255632,
            text: 'Hello World!',
          },
        ]}
      />,
    )
    const noMessages = screen.queryByText('No messages yet')
    expect(noMessages).not.toBeInTheDocument()
    const helloWorld = screen.queryByText('Hello World!')
    expect(helloWorld).toBeInTheDocument()
  })
})
