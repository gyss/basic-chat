/** @format */

import * as React from 'react'
import * as ReactDOM from 'react-dom'
import './style.css'

require('file-loader?name=[name].[ext]!./index.html')

function Main() {
  return <div>HOLA!</div>
}

ReactDOM.render(<Main />, document.getElementById('root'))
