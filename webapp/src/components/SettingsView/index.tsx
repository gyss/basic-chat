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
      Settings
    </div>
  )
}
