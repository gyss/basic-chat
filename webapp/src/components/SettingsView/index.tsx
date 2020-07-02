/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import Context from '../../store/Context'
import Button from '../../controls/Button'
import Select from '../../controls/Select'
import InputText from '../../controls/InputText'

const container = css`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 53px);

  @media (min-width: 700px) {
    max-width: 700px;
    margin: 0 auto;
  }
`

const settingsBox = css`
  padding: 1rem;
  overflow-y: auto;
  flex-grow: 1;
`

const control = css`
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 0.75rem;
    font-size: 1.125rem;
  }
`

const footer = css`
  padding: 1rem;
  display: flex;
`

const languages = [
  {value: 'en', label: 'English'},
  {value: 'es', label: 'Spanish'},
]

export default function SettingsView() {
  const {
    globalState: {settings},
    dispatch,
  } = React.useContext(Context)

  return (
    <div css={container}>
      <div css={settingsBox}>
        <div css={control}>
          <label htmlFor="username">User name</label>
          <InputText name="username" value={settings.username} />
        </div>

        <div css={control}>
          <label htmlFor="theme">Interface color</label>
          <div>
            <input type="radio" name="theme" value="light" checked={settings.theme === 'light'} />{' '}
            Light
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={settings.theme === 'dark'}
            />{' '}
            Dark
          </div>
        </div>

        <div css={control}>
          <label htmlFor="clock">Clock display</label>
          <div>
            <input type="radio" name="clock" value="12" checked={settings.clock === '12'} /> 12
            Hours
            <input type="radio" name="clock" value="24" checked={settings.clock === '24'} /> 24
            Hours
          </div>
        </div>

        <div css={control}>
          <label htmlFor="sendtype">Send messages on CTRL+ENTER</label>
          <div>
            <input type="radio" name="sendtype" value="on" checked={settings.sendType} /> On
            <input type="radio" name="sendtype" value="off" checked={!settings.sendType} /> Off
          </div>
        </div>

        <div css={control}>
          <label htmlFor="language">Language</label>
          <Select name="language" options={languages} value={settings.language} />
        </div>
      </div>

      <div css={footer}>
        <Button fullWidth>Reset to defaults</Button>
      </div>
    </div>
  )
}
