/** @format */

import * as React from 'react'
import {render} from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

import Select from '../Select'

describe('<Select>', () => {
  test('should render', () => {
    const options = [
      {value: '0', label: 'zero'},
      {value: '1', label: 'one'},
    ]
    const {asFragment} = render(<Select value="1" options={options} onChange={() => {}} />)
    expect(asFragment()).toMatchSnapshot()
  })
})
