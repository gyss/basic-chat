/** @format */

import * as React from 'react'
import {render, screen, fireEvent} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '../Button'

describe('<Button>', () => {
  let props: any

  beforeEach(() => {
    props = {
      onClick: jest.fn(),
    }
  })

  test('should render', () => {
    const {asFragment} = render(<Button>This is a test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })

  test('should execute onClick prop when user clicks', () => {
    render(<Button {...props}>Send</Button>)

    fireEvent.click(screen.getByText('Send'))
    expect(props.onClick).toHaveBeenCalledTimes(1)
  })
})
