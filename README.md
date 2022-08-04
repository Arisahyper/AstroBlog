<h1 align="center">Astro + Tailwind</h1>

<div align="center">
<img src="https://api.iconify.design/logos/astro.svg?width=200"/>
</div>

## Installation

```bash
$ git clone https://github.com/Arisahyper/Astro.git
$ cd Astro
$ pnpm i
```

## Self Setup

If you want to start an Astro project with the same configuration, follow these steps.

```bash
$ pnpm create astro@latest
$ pnpm i
$ pnpx astro add tailwindcss
```

- src/styles/global.css

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

- src/layout/layout.astro

```astro
---
import "../styles/global.css"
---
```

- src/pages/index/astro

```astro
---
import Layout from "../layouts/Layout.astro";
---

<Layout title="Your website title">
	// ...
</Layout>
```
