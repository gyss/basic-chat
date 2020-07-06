/** @format */

import * as React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import InputText from '../InputText'

describe('<InputText>', () => {
  test('should render', () => {
    const {asFragment} = render(<InputText name="username" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
