/** @jsx jsx */

import * as React from 'react'
import {css, jsx} from '@emotion/core'

import {
  SETTINGS_RESET,
  SET_SETTINGS_CLOCK,
  SET_SETTINGS_LANGUAGE,
  SET_SETTINGS_USERNAME,
  SET_SETTINGS_SENDTYPE,
  SET_SETTINGS_THEME,
} from '../../store/actionTypes'
import Context from '../../store/Context'
import Button from '../../controls/Button'
import Select from '../../controls/Select'
import InputText from '../../controls/InputText'
import {updateUser, updateSetting, resetSettings} from '../../common/storage'

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
    globalState: {user, settings},
    dispatch,
  } = React.useContext(Context)

  // Action creators
  function handleChangeClock(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    dispatch({type: SET_SETTINGS_CLOCK, payload: value})
    updateSetting({[event.target.name]: value})
  }
  function handleChangeTheme(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    dispatch({type: SET_SETTINGS_THEME, payload: value})
    updateSetting({[event.target.name]: value})
  }
  function handleChangeUsername(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value.replace(/[\W_]+/g, '')
    dispatch({type: SET_SETTINGS_USERNAME, payload: value})
    updateUser({[event.target.name]: value})
  }
  function handleChangeSendType(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value === 'on'
    dispatch({type: SET_SETTINGS_SENDTYPE, payload: value})
    updateSetting({[event.target.name]: value})
  }
  function handleSelectLanguage(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value
    dispatch({type: SET_SETTINGS_LANGUAGE, payload: value})
    updateSetting({[event.target.name]: value})
  }
  function handleReset() {
    dispatch({type: SETTINGS_RESET})
    resetSettings()
  }

  return (
    <div css={container}>
      <div css={settingsBox}>
        <div css={control}>
          <label htmlFor="username">User name</label>
          <InputText name="username" value={user.username} onChange={handleChangeUsername} />
        </div>

        <div css={control}>
          <label htmlFor="theme">Interface color</label>
          <div>
            <input
              type="radio"
              name="theme"
              value="light"
              checked={settings.theme === 'light'}
              onChange={handleChangeTheme}
            />{' '}
            Light
            <input
              type="radio"
              name="theme"
              value="dark"
              checked={settings.theme === 'dark'}
              onChange={handleChangeTheme}
            />{' '}
            Dark
          </div>
        </div>

        <div css={control}>
          <label htmlFor="clock">Clock display</label>
          <div>
            <input
              type="radio"
              name="clock"
              value="12"
              checked={settings.clock === '12'}
              onChange={handleChangeClock}
            />{' '}
            12 Hours
            <input
              type="radio"
              name="clock"
              value="24"
              checked={settings.clock === '24'}
              onChange={handleChangeClock}
            />{' '}
            24 Hours
          </div>
        </div>

        <div css={control}>
          <label htmlFor="sendType">Send messages on CTRL+ENTER</label>
          <div>
            <input
              type="radio"
              name="sendType"
              value="on"
              checked={settings.sendType}
              onChange={handleChangeSendType}
            />{' '}
            On
            <input
              type="radio"
              name="sendType"
              value="off"
              checked={!settings.sendType}
              onChange={handleChangeSendType}
            />{' '}
            Off
          </div>
        </div>

        <div css={control}>
          <label htmlFor="language">Language</label>
          <Select name="language" options={languages} value={settings.language} onChange={handleSelectLanguage} />
        </div>
      </div>

      <div css={footer}>
        <Button fullWidth onClick={handleReset}>
          Reset to defaults
        </Button>
      </div>
    </div>
  )
}
