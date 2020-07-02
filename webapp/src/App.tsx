/** @jsx jsx */

import * as React from "react"

import styled from "@emotion/styled"
import { css, Global, jsx } from "@emotion/core"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import appReducer, { initialState } from "./store/reducer"
import Context from "./store/Context"
import ErrorBoundary from "./components/ErrorBoundary"
import ChatView from "./components/ChatView"
import SettingsView from "./components/SettingsView"
import Navigation from "./components/Navigation"

const globalStyles = css`
  :root {
    --green: #d4fde6;
    --blue: #6559fb;
    --pink: #ffcbc9;
  }

  html,
  body,
  #root {
    height: 100%;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
    font-family: Circular, Arial, sans-serif;
    font-size: 18px;
    padding: 0;
    margin: 0;
  }
`

const AppWrapper = styled.div`
  background-color: var(--green);
  min-height: 100%;
`

export default function App() {
  const [globalState, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <Context.Provider value={{ globalState, dispatch }}>
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
    </Context.Provider>
  )
}
