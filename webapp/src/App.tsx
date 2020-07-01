/** @jsx jsx */

import * as React from 'react'
import * as io from 'socket.io-client'
import {css, Global, jsx} from '@emotion/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary'
import ChatView from './components/ChatView'
import SettingsView from './components/SettingsView'

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

export default function App() {
  return (
    <ErrorBoundary>
      <Global styles={globalStyles} />
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Chat</Link>
              </li>
              <li>
                <Link to="/settings">Settings</Link>
              </li>
            </ul>
          </nav>
          <Switch>
            <Route path="/settings">
              <SettingsView />
            </Route>
            <Route path="/">
              <ChatView />
            </Route>
          </Switch>
        </div>
      </Router>

    </ErrorBoundary>
  )
}
