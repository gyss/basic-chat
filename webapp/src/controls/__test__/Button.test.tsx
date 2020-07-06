/** @format */

import * as React from 'react'
import {render, fireEvent, cleanup} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Button from '../Button'

describe('<Button>', () => {
  afterEach(cleanup)

  test('should render', () => {
    const {asFragment} = render(<Button>This is a test</Button>)
    expect(asFragment()).toMatchSnapshot()
  })
})
