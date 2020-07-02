/** @jsx jsx */

import * as React from 'react'

import styled from '@emotion/styled'
import {css, Global, jsx} from '@emotion/core'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import ErrorBoundary from './components/ErrorBoundary'
import ChatView from './components/ChatView'
import SettingsView from './components/SettingsView'
import Navigation from './components/Navigation'

const globalStyles = css`
  :root {
    --green: #d4fde6;
    --blue: #6559fb;
    --pink: #ffcbc9;
  }

  html, body, #root {
    height: 100%;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Circular, Arial, sans-serif;
    font-size: 18px;
    padding: 0;
    margin: 0;
    
  }
  /** + * {
    margin-top: 1.5rem;
  }*/
`

const AppWrapper = styled.div`
  background-color: var(--green);

  min-height: 100%;
  /*display: flex;
  flex-direction: column;*/
`


export default function App() {
  return (
    <ErrorBoundary>
      <Global styles={globalStyles} />
      <Router>
        <AppWrapper>
          <Navigation />
          <Switch>
            <Route path="/settings">
              <SettingsView />
            </Route>
            <Route path="/">
              <ChatView />
            </Route>
          </Switch>
        </AppWrapper>
      </Router>

    </ErrorBoundary>
  )
}
