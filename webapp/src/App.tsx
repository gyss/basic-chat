/** @jsx jsx */

import * as React from 'react'

import styled from '@emotion/styled'
import {css, Global, jsx} from '@emotion/core'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import appReducer, {initialState} from './store/reducer'
import Context from './store/Context'
import expose from './store/exposedContext'
import ErrorBoundary from './components/ErrorBoundary'
import ChatView from './components/ChatView'
import SettingsView from './components/SettingsView'
import Navigation from './components/Navigation'

const globalStyles = css`
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
    color: var(--font-color);
    background-color: var(--tertiary-color);
    padding: 0;
    margin: 0;
  }
`

const themeLight = css`
  :root {
    --primary-color: #009688;
    --secondary-color: #58cdbd;
    --tertiary-color: #c3fcf2;
    --counter-color: #f97dea;
    --font-color: black;
  }
`

const themeDark = css`
  :root {
    --primary-color: #242f2e;
    --tertiary-color: #515d5c;
    --secondary-color: #566877;
    --counter-color: #ff70c2;
    --font-color: white;
  }
`

const AppWrapper = styled.div`
  min-height: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`

export default function App() {
  const [globalState, dispatch] = React.useReducer(appReducer, initialState)

  return (
    <Context.Provider value={{globalState, dispatch}}>
      <Context.Consumer>
        {(value) => {
          expose(value.dispatch, value.globalState)
          return null
        }}
      </Context.Consumer>
      <ErrorBoundary>
        <Global styles={globalStyles} />
        <Global styles={globalState.settings.theme === 'light' ? themeLight : themeDark} />
        <Router>
          <AppWrapper>
            <Navigation />
            <Switch>
              <Route exact path="/settings">
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
