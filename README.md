# Amplitech AI Agent Chat App

A modern, responsive chat application built with React, Vite, and TypeScript. Features a template-driven system, video backgrounds, smooth framer-motion animations, and a mock voice UI. Designed for rapid prototyping and beautiful UX on both desktop and mobile.

## Features

- **Landing Page:**
  - Dual video autoplay with smooth fade transitions
  - Animated heading, subheading, and logo (framer-motion)
  - Pill-shaped blue CTA buttons
  - Responsive layout for all devices
- **Chat Window:**
  - Animated agent avatar with glowing effect
  - Header with logo and close/back button
  - Fullscreen, mobile-friendly layout
  - Mock conversation with user/assistant roles
  - Microphone button with mock voice UI states (recording, mute, speaking)
  - Scroll-to-bottom and loading animation for streaming messages
- **Configurable:**
  - All content and styles driven by a template config (`src/config/templates/template1.ts`)
- **Tech Stack:**
  - React + Vite + TypeScript
  - Tailwind CSS v4 (no config file required)
  - framer-motion for smooth UI transitions
  - Redux Toolkit for state management

## Getting Started

1. **Install dependencies:**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Run the development server:**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

3. **Open your browser:**
   Visit [http://localhost:5173](http://localhost:5173) to view the app.

## Project Structure

- `src/components/` — UI components (LandingPage, ChatWindow, Conversation, etc.)
- `src/config/templates/template1.ts` — Template-driven content and styles
- `src/store/` — Redux slices and store setup
- `src/types/Template.ts` — TypeScript interfaces for template config

## Customization

- Update `src/config/templates/template1.ts` to change branding, videos, colors, and text.
- Modify components in `src/components/` for further UI/UX tweaks.

## Notes

- Tailwind CSS v4 is used with default settings (no config file required).
- Voice UI is mock-only; no real audio is sent or received.
- All animations use framer-motion for smooth transitions.

## License

MIT
