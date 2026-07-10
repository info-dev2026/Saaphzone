# Next.js Study Guide: From Scratch to Full-Stack

This guide is designed to take you from React fundamentals to mastering Next.js (App Router), referencing the structure of your own Saaphzone codebase.

---

## 1. What is Next.js?

React is a frontend library for building user interfaces. To make a full React application, you need to handle routing, page optimization, compilation, and backend connections.

**Next.js** is a framework that provides all of this out of the box:
* **Server-Side Rendering (SSR)**: Renders pages on the server, making pages load faster and improving SEO.
* **App Router**: Uses a folder-based structure to define routes.
* **Built-in Optimizations**: Optimizes fonts, scripts, and images automatically.

---

## 2. Core Concepts: The File System Router

In Next.js, routes are determined by the folder hierarchy inside `src/app/`. Every folder representing a route must contain a `page.tsx` file.

| URL path | Folder Path | File |
|---|---|---|
| `/` | `src/app/` | `page.tsx` |
| `/about` | `src/app/about/` | `page.tsx` |
| `/services` | `src/app/services/` | `page.tsx` |
| `/services/bess` | `src/app/services/bess/` | `page.tsx` |

### Special File Names:
* `page.tsx`: Defines the unique UI of a route.
* `layout.tsx`: Defines a shared layout wrapped around pages.
* `not-found.tsx`: Renders when a page does not exist (custom 404 page).
* `loading.tsx`: Renders a loading state wrapper when pages fetch data.

---

## 3. Server Components vs. Client Components

Next.js divides React components into two categories. Understanding this is key to writing bug-free Next.js code.

### ⚛️ Server Components (Default)
All components inside `src/app` are Server Components by default.
* **Where they render**: On the server.
* **Pros**: Faster initial load, secure API key usage, smaller bundle sizes (browsers don't download their code).
* **Limitations**: Cannot use state (`useState`), side-effects (`useEffect`), or browser-only APIs (like `window` or `document`).

### 📱 Client Components
To build interactive components (like forms, buttons with click events, or parallax effects), you declare them as Client Components.
* **How to define**: Add `"use client"` at the very top of the file (before any imports).
* **Where they render**: Rendered on the server initially, then hydrated on the client browser.
* **Pros**: Can use React hooks (`useState`, `useEffect`, `useRef`), Framer Motion, and event listeners.

#### Example: Client Component
```tsx
"use client"; // Marks this as a Client Component

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button onClick={() => setCount(count + 1)}>
      Clicked {count} times
    </button>
  );
}
```

---

## 4. Layouts and Children

The [layout.tsx](file:///c:/Users/hp/Desktop/Saaphzone/src/app/layout.tsx) file wraps all page components. Let's see how it passes the page content via the `children` prop:

```tsx
import type { Metadata } from "next";
import "./globals.css";

// This layout is applied to every page under src/app/
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <nav>My Global Navbar</nav>
        
        <main>{children}</main> {/* page.tsx content is injected here */}
        
        <footer>My Global Footer</footer>
      </body>
    </html>
  );
}
```

---

## 5. Next.js Core Components

Next.js provides custom replacements for standard HTML elements to optimize page speeds:

### 1. Linking (`next/link`)
Instead of using `<a href="/path">`, use `<Link href="/path">`.
* Standard `<a>` tags trigger a full page refresh.
* `<Link>` handles background prefetching and shifts pages instantly.
```tsx
import Link from "next/link";

<Link href="/about">Go to About Page</Link>
```

### 2. Images (`next/image`)
Instead of using `<img src="..." />`, use the `<Image>` component.
* Prevents layout shifts by enforcing default sizes.
* Automatically serves modern web formats (like WebP) based on browser capabilities.
```tsx
import Image from "next/image";

<Image
  src="/logo.png"
  alt="Saaphzone Logo"
  width={150}
  height={50}
  priority // Tells Next.js to load this image immediately (useful for logos/heros)
/>
```

---

## 6. Study Roadmap: Build Your First Page

To practice:
1. Create a new folder under `src/app/` named `test`.
2. Inside `src/app/test/`, create a file named `page.tsx`.
3. Add the following code:
   ```tsx
   export default function TestPage() {
     return (
       <div className="p-8">
         <h1 className="text-2xl font-bold">Hello World!</h1>
         <p>This is my first Next.js route.</p>
       </div>
     );
   }
   ```
4. Start your development server with `npm run dev` and visit `http://localhost:3000/test` to see it render!
