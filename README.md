# Chatbot Project

A simple chatbot web app built with React, TypeScript, and Vite. Users can send messages and receive automated responses from a bot, with a typing indicator while the bot is "thinking".

## Features

- Chat with an AI-powered bot via the `supersimpledev` chatbot library
- Built-in responses for questions like *"what time is it"*, *"flip the coin"*, and *"toss the dies"*
- Typing indicator (animated dots) while waiting for a bot reply
- Message timestamps formatted with [Day.js](https://day.js.org/)
- Chat history persisted in `localStorage` — messages survive page refreshes
- Dynamic browser tab title showing the current message count

## Tech Stack

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Day.js](https://day.js.org/)
- [supersimpledev chatbot](https://www.npmjs.com/package/supersimpledev)

## Project Structure

```
src/
├── App.tsx                  # Root component, state management, localStorage sync
├── types.ts                 # Shared TypeScript interfaces (MassageChat)
├── components/
│   ├── ChatInput.tsx        # Message input & submit logic
│   ├── ChatMassage.tsx      # Individual message bubble
│   ├── chatMassages.tsx     # Message list with auto-scroll
│   └── Spine.tsx            # Typing indicator animation
└── hooks/
    └── useAutoScroll.ts     # Auto-scrolls chat to the latest message
```

## Getting Started

**Install dependencies**

```bash
npm install
```

**Start the dev server**

```bash
npm run dev
```

**Build for production**

```bash
npm run build
```

**Preview the production build**

```bash
npm run preview
```
