/** @format */

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Message, {IProps} from '../../ChatView/Message'

describe('<Message>', () => {
  let props: IProps

  beforeEach(() => {
    props = {
      message: {
        id: '1',
        user: {
          id: '1',
          username: 'Pepe',
        },
        timestamp: 1594037255632,
        text: 'Hello World!',
      },
    }
  })

  test('should render', () => {
    const {asFragment} = render(<Message {...props} />)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should render by default in 12 hours format', () => {
    render(<Message {...props} />)

    const messageMeta = screen.queryByText('Pepe, 01:07 pm')
    expect(messageMeta).toBeInTheDocument()
  })

  test('should render in 24 hours format', () => {
    render(<Message {...props} hourFormat="24" />)

    const messageMeta = screen.queryByText('Pepe, 13:07')
    expect(messageMeta).toBeInTheDocument()
  })

  test('should render only the time when isOwnedByUser', () => {
    render(<Message {...props} isOwnedByUser />)

    const messageMeta = screen.queryByText('Pepe, 01:07 pm')
    expect(messageMeta).not.toBeInTheDocument()
  })
})
