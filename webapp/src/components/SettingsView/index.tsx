/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

const container = css`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export default function SettingsView() {
  return (
    <div css={container}>
      <h2>Settings</h2>

      <div>
        <label>Username</label>
        <input type="text" name="username" value="" />
      </div>

      <div>
        <label>Interface color</label>
        <input type="radio" name="theme" value="light" checked /> Light
        <input type="radio" name="theme" value="dark" /> Dark
      </div>
      
      <div>
        <label>Clock display</label>
        <input type="radio" name="clock" value="12" checked /> 12 Hours
        <input type="radio" name="clock" value="24" /> 24 Hours
      </div>

      
      <div>
        <label>Send messages on CTRL+ENTER</label>
        <input type="radio" name="sendtype" value="on" checked /> On
        <input type="radio" name="sendtype" value="off" /> Off
      </div>

      <div>
        <label>Language</label>
        <select>
          <option value="en">English</option>
          <option value="es">Spanish</option>
        </select>
      </div>

      <button>Reset to defaults</button>
    </div>
  )
}
