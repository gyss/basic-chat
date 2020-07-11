import * as React from 'react'
import * as ReactDOM from 'react-dom'

import chactSocket from './network/chatSocket'
import App from './App'

chactSocket.connect(process.env.CHAT_SERVER_BASE_URL)

ReactDOM.render(<App />, document.getElementById('root'))
