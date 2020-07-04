import * as React from 'react'
import * as ReactDOM from 'react-dom'

import chactSocket from './network/chatSocket'
import App from './App'

chactSocket.connect('http://localhost:3000')

require('file-loader?name=[name].[ext]!./index.html')

ReactDOM.render(<App />, document.getElementById('root'))
