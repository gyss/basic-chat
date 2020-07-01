/** @jsx jsx */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as io from 'socket.io-client'
import {css, Global, jsx} from '@emotion/core'

import Layout from './components/Layout'

require('file-loader?name=[name].[ext]!./index.html')

const socket = io('http://localhost:3000')

const globalStyles = css`
  :root {
    --green: #d4fde6;
    --blue: #6559fb;
    --pink: #ffcbc9;
  }
  body {
    font-family: Circular, Arial, sans-serif;
    background-color: var(--green);
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }
`

function Main() {
  return (
    <React.Fragment>
      <Global styles={globalStyles} />
      <Layout>BODY</Layout>
    </React.Fragment>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
