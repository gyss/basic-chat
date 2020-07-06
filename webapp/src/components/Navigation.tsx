/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'
import styled from '@emotion/styled'
import {NavLink, useLocation} from 'react-router-dom'

import {CLEAR_UNREAD_MESSAGES} from '../store/actionTypes'
import Context from '../store/Context'

const navigationStyles = css`
  background-color: var(--primary-color);
  width: 100%;
  display: flex;
  padding-left: 1rem;
  > a {
    text-decoration: none;
    color: var(--tertiary-color);
    padding: 1rem 1.125rem;
    :hover {
      color: white;
    }
  }
  a + a {
    margin-left: 1rem;
  }

  :after {
    content: '';
    background-color: var(--primary-color);
    position: absolute;
    width: 100%;
    height: 53px;
    left: 0;
    z-index: -1;
  }
`

interface StyledNavLinkProps {
  badge?: number
}
const StyledNavLink = styled(NavLink)`
  position: relative;

  ${(props: StyledNavLinkProps) =>
    props.badge > 0 &&
    `
    &::after {
      content: '${props.badge}';
      position: absolute;
      top: 5px;
      right: 5px;
      width: 15px;
      height: 15px;
      border-radius: 25px;
      padding: 1px 4px;
      font-size: 12px;
      color: white;
      background-color: red;
    }
  `}
`

const activeStyle = {
  color: 'white',
}

export default function Navigation() {
  const {
    dispatch,
    globalState: {navigation},
  } = React.useContext(Context)

  let location = useLocation()
  React.useEffect(() => {
    if (location.pathname === '/') {
      dispatch({type: CLEAR_UNREAD_MESSAGES})
    }
  }, [location])

  return (
    <nav css={navigationStyles}>
      <StyledNavLink exact to="/" activeStyle={activeStyle} badge={Math.min(navigation.unreadMessages, 9)}>
        Chat
      </StyledNavLink>
      <StyledNavLink exact to="/settings" activeStyle={activeStyle}>
        Settings
      </StyledNavLink>
    </nav>
  )
}
