 # Neo Brutal Components

<p align="center">
  <img src="https://img.shields.io/npm/v/neo-brutal-components" alt="npm version" />
</p>

A collection of bold, playful, and unapologetically **Neo-Brutalist UI components** for React, built with **Tailwind CSS**. No extra CSS just plug in and go!

> 🧱 Thick borders • 🔴 Vivid colors • ✊ Hard shadows • 💥 Press-down interaction

## ✨ Features

- 100% **Tailwind CSS** powered , no extra CSS files
- Fully **typed** with TypeScript
- Works with **React**, **Next.js**, and **Vite**
- Tree-shakeable & lightweight
- Easy to customize via your Tailwind config

## 📦 Installation

```bash
npm install neo-brutal-components
```

> ⚠️ **Requires**: React 17+ and Tailwind CSS v3+

## ⚙️ Setup

To make styles work, **you must tell Tailwind to scan the library’s files**.

Add this line to the `content` array in your `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    // 👇 Add this line
    "./node_modules/neo-brutal-components/dist/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

> ❗ Without this, components will render but **styles won’t appear**.


## 🎮 Usage

```tsx
import { Button } from 'neo-brutal-components';

function App() {
  return (
    <Button variant="primary" size="md">
      Click Me!
    </Button>
  );
}
```

### Button Props

| Prop      | Type                        | Default     |
|-----------|-----------------------------|-------------|
| `variant` | `'primary' \| 'secondary'`  | `'primary'` |
| `size`    | `'sm' \| 'md' \| 'lg'`      | `'md'`      |
| `...`     | All standard button props   |             |

---

## 🎨 Neo-Brutalism Style Guide

Your components use these signature styles:
- `border-4` with solid black borders
- Hard drop shadows: `shadow-[4px_4px_0_0_#000]`
- Press feedback: `active:translate-x-1 active:translate-y-1`
- Bold, flat colors (e.g., `bg-yellow-400`, `bg-white`)

You can customize colors, spacing, and more via your own `tailwind.config.js`.


## 📄 License

[MIT ©](https://github.com/homayounmmdy/neo-brutal-components/blob/main/LICENSE)

## 🙌 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to check [issues page](https://github.com/homayounmmdy/neo-brutal-components/issues).
