/** @format */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import * as io from 'socket.io-client'

import './style.css'

require('file-loader?name=[name].[ext]!./index.html')

const socket = io('http://localhost:3000')

function Main() {
  return <div>HOLA!</div>
}

ReactDOM.render(<Main />, document.getElementById('root'))
