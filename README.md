# vite-copyright-injector
**English** | [中文](./README.zh_CN.md) | [Français](./README.fr_FR.md)

## Description

vite-copyright-injector is a plugin specifically created for Vite.js. Its main function is to automatically insert copyright notices at the top of your source code files.

## Key Features

- Automatic insertion of copyright notices
- Configurable with options for custom copyright text
- Supports a variety of file types, including .js, .ts, .vue, etc.
- Fast, lightweight, non-intrusive

## Installation

Install using npm or yarn:

```bash
npm install vite-copyright-injector --save-dev
# or
yarn add vite-copyright-injector -D
```

## Usage

Import and use the plugin in your `vite.config.js` or `vite.config.ts` file:

```javascript
import { defineConfig } from 'vite'
import copyright from 'vite-copyright-injector'

export default defineConfig({
  plugins: [
    copyright({
      // Optional configuration goes here
    }),
  ],
})
```

## Configuration

The plugin accepts a configuration object, below are all available configuration options:

```javascript
{
  // More details here
}
```

## License

MIT
