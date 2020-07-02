/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import Button from '../../controls/Button'
import Select from '../../controls/Select'
import InputText from '../../controls/InputText'

const container = css`
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex: 1;
`

const control = css`
  margin-bottom: .75rem;
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: .75rem;
    font-size: 1.125rem;
  }
`

const languages = [
  {value: "en", label: "English"},
  {value: "es", label: "Spanish"}
]

export default function SettingsView() {
  return (
    <div css={container}>
      <div css={control}>
        <label htmlFor="username">User name</label>
        <InputText type="text" name="username" value="" />
      </div>

      <div css={control}>
        <label htmlFor="theme">Interface color</label>
        <div>
          <input type="radio" name="theme" value="light" checked /> Light
          <input type="radio" name="theme" value="dark" /> Dark
        </div>
      </div>
      
      <div css={control}>
        <label htmlFor="clock">Clock display</label>
        <div>
          <input type="radio" name="clock" value="12" checked /> 12 Hours
          <input type="radio" name="clock" value="24" /> 24 Hours
        </div>
      </div>

      
      <div css={control}>
        <label htmlFor="sendtype">Send messages on CTRL+ENTER</label>
        <div>
          <input type="radio" name="sendtype" value="on" checked /> On
          <input type="radio" name="sendtype" value="off" /> Off
        </div>
      </div>

      <div css={control}>
        <label htmlFor="language">Language</label>
        <Select name="language" options={languages} />
      </div>

      <Button>Reset to defaults</Button>
    </div>
  )
}
