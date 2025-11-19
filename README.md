# Vite + React + TailwindCSS Setup (Tailwind v4)

This project uses **Vite**, **React 19**, and **TailwindCSS v4** with
the new official Tailwind Vite plugin.

---

## 🚀 1. Create Vite + React Project

```bash
npm create vite@latest
# ye bhi install kr lo
1. npm install @remixicon/react@latest axios@latest caniuse-lite@latest framer-motion@latest react@latest react-dom@latest react-hot-toast@latest react-icons@latest

cd your-project
npm install
```

---

## 🎨 2. Install TailwindCSS (v4) + Tailwind Vite Plugin

```bash
npm install -D tailwindcss @tailwindcss/vite
```

### (Optional Plugins)

```bash
npm install -D @tailwindcss/forms @tailwindcss/typography
```

---

## ⚙️ 3. Update `vite.config.js`

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(), // Tailwind v4 Vite plugin
  ],
});
```

---

## 🛠️ 4. Create Tailwind Config File Manually

(Tailwind v4 me `npx tailwindcss init` command kaam nahi karti)

Create a file: **tailwind.config.js**

```js
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```

(Add forms/typography if installed.)

---

## 🎯 5. Add Tailwind Import in CSS

In `src/index.css`:

```css
@import "tailwindcss";
```

---

## 🔗 6. Import CSS in `main.jsx`

```js
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

---

## 🧪 7. Run the Project

```bash
npm run dev
```

---

## ✔️ Setup Complete!

You can now use Tailwind classes anywhere in your React components:

```jsx
<h1 class="text-3xl font-bold text-blue-600">Hello TailwindCSS v4 + React!</h1>
```

---

## 📦 8. Build for Production

```bash
npm run build
npm run preview
```
