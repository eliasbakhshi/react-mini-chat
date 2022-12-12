## Application overview

This is a mock chat app, you can send messages by typing and then pressing `Send message` or enter button.
You can react to a message by pressing the emoji button next to a message and selecting your reaction.

## Setup

To run the app, you will need to install:

- `Node`

To start the app you need to run:

- `npm install`
- `npm start`
- Go to development page: http://localhost:3000

## Background story

Customer feedback says that our chat app is running slow. We suspect it might be a re-render problem that causes lag. Customers also want the ability to click links that are sent in a message and they want mentions to be highlighted in messages.

## Tasks

All parts of the challenge are somewhat open-ended and you are free to make assumptions, improvements and trade-offs as you see fit.

- Investigate and fix potential re-render problems.
- Implement your desired state management solution and refactor how messages are stored. Redux, Zustand or any of your choice.
- Highlight mentions in messages when matching on `@mention` structure
  - test mentions: `@jane`, `@john`
- Make urls clickable in messages
  - test urls: `https://imbox.se`, `imbox.se`

## Timing

The task should not require more than a couple of hours focused work.

## Questions and feedback

- Ask early if things are not clear.
- Tell us if you are stuck.
- Let us know when you are done by sending the code to us.
- We will go through your code and you will have time to explain your decisions. We are very interested in hearing your thought process, so remember to document what you are doing.
