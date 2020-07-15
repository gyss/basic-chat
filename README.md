# Basic Chat [![Build Status](https://travis-ci.com/gyss/basic-chat.svg?branch=master)](https://travis-ci.com/gyss/basic-chat.svg?branch=master) [![Cypress.io tests](https://img.shields.io/badge/cypress.io-tests-green.svg?style=flat-square)](https://dashboard.cypress.io/#/projects/99s4sa/runs)

<img src="./webapp/assets/logo.png" alt="Kitten"
	title="A cute kitten" width="50" height="50" style="float: left; padding-right: 10px" />

Basic chat developed with React/Typescript for the SPA and NodeJs for the back-end. Using WebSockets (Socket.io) to connect the webapps to the server.

See example [here](https://gyss.github.io/basic-chat/) (only UI, still requires a server deployment to enable chat)

## Installation

Install server dependencies

```
$ cd server/
$ npm i
```

Install SPA client dependencies

```
$ cd webapp/
$ npm i
```

## Configuration

The project requires to setup environment variables. Copy `webapp/.env.template` to `webapp/.env` and fill the corresponding variables.

- _CHAT_SERVER_BASE_URL_: it contains the base url where the chat server is located. In development, this will be needed to be able to connect clients that are not running in the same computer as the server.

## Commands

### Client

- `$ npm start`: Run development server
- `$ npm run build`: Build static assets
- `$ npm test`: Execute test runner

### Server

- `$ npm start`: Run server

## Features

### Required

- [x] Change username
- [x] Light/Dark theme
- [x] Clock display
- [x] Send messages on CTRL+ENTER
- [x] Reset to defaults
- [x] Local Storage
- [x] Unit testing (Jest + React Testing Library)
- [x] Basic responsive design
- [x] Blink chat tab when unread messages
- [x] Typescript

### Optional

- [x] TSLinter
- [x] Manifest file
- [ ] Smiles support
- [ ] Link parser (Youtube link, message, ...)
- [ ] I18N
- [x] Add support to unread chat notifications
- [x] CSS in JS solution
- [x] React Hooks + React Context API
- [ ] Focus on chat message input field when rendering chat view
- [ ] Scroll down chat messages when updating chat
- [ ] When user changes username, send the name to other clients in a new chat channel
- [ ] When user connects to the chat, send the notification to the other clients
- [ ] Store in memory last 20 messages sent to the server, so when a new user connects, he/she can read part of the chat history
- [x] Setup Travis CI to run all tests on every commit
- [ ] Work on Ally
- [x] Code splitting
- [x] End to end testing with Cypress
