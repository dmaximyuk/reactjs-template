<!-- For GitHub Pages/Vercel -->
<meta name="description" content="FSD React Template: Feature-Sliced Design boilerplate for React">
<meta name="keywords" content="fsd, react template, feature sliced design, react boilerplate">
<!-- ======================= -->

# ⚛️ React.js Template — Production-Ready Starter Kit

## 🎯 Purpose
This template is designed for developers who want to kickstart a modern React.js project with a fully optimized setup. It includes everything needed for scalable application development — from FSD architecture, routing, state management, and localization to a lightning-fast build powered by Vite and SWC.

## ✨ Features  
1. 🧭 [TanStack Router](https://tanstack.com/router) — modern, type-safe routing solution;
2. ⚡ [TanStack Query](https://tanstack.com/query) — powerful data fetching and caching layer;
3. 🧠 [Zustand](https://github.com/pmndrs/zustand) — a small, fast and scalable bearbones state-management solution using simplified flux principles;
4. 🌍 [i18next](https://www.npmjs.com/package/react-i18next) — full support for internationalization and locale handling;
5. 📦 Build Analyzer — integrated bundle size visualization with vite-bundle-analyzer;
6. 🗜️ File Compression — Brotli and Gzip compression support for static assets;
7. 🖼️ Image Optimization — automatic WebP conversion and image optimization via vite-imagetools and vite-plugin-image-optimizer;
8. ⚙️ SWC Compiler — blazing-fast transpilation for TypeScript and JavaScript via @vitejs/plugin-react-swc;
9. 🎨 LightningCSS — ultra-fast CSS minification and processing;
10. 💅 SASS — powerful CSS preprocessor for styling;
11. 🔧 Terser — advanced JavaScript minification with configurable optimization levels;
12. 🔍 ESLint + Prettier + Commitlint — strict code style enforcement out of the box;
13. 🧪 Jest — preconfigured unit testing environment with Testing Library;
14. 🐳 Docker + NGINX — robust deployment setup with containerization.

## 📂 Project Structure
### Structure
```plaintext
├── .husky/        # Git hooks for commit quality
├── src/
│   ├── app/       # App initialization logic
│   ├── entities/  # Domain entities and models
│   ├── features/  # Feature-specific logic
│   ├── pages/     # Application pages
│   └── shared/    # Shared components and utilities
├── vite/          # Vite-specific configuration
```

### Analysis

![Build Analysis Screenshot](repository/images/bundle.png)

## 🚀 Quick Start  

### Prerequisites  
- **Node.js**: Ensure you have Node.js >=24.12 installed.  
- **Package Manager**: pnpm (recommended) or npm

### Installation
```bash
git clone <repository-url>
cd <project-directory>
pnpm install
# or
npm install
```

### Start Development Server
```bash
pnpm run dev
# or
npm run dev
```

### Build for Production
```bash
# Standard build with type checking
pnpm run build

# Build with file compression (gzip + brotli)
pnpm run build:compress

# Build with bundle analyzer
pnpm run build:analyzer

# Build with compression and analyzer
pnpm run build:compress-analyzer
```

### Run Tests
```bash
pnpm run test
```

### Code Quality
```bash
# Lint code
pnpm run lint

# Fix linting issues
pnpm run lint:fix

# Format code
pnpm run format

# Check TypeScript types
pnpm run typecheck
```

### Preview Production Build
```bash
pnpm run serve
```

## 📜 Code Standards  
- ✅ 100% TypeScript-first approach with strict type checking
- 🧩 Modular architecture following Feature-Sliced Design (FSD) principles
- ⚠️ Strict compliance with ESLint and Steiger (FSD) configuration standards
- 🎯 Arrow functions preferred for JavaScript/TypeScript code
- 🧹 SOLID and KISS principles adherence
- 🚫 No unused code or comments in production code

## 🙎️ Author / Contacts

If you have any questions, feel free to reach out:

- **Email**: d_maksimyk@vk.com
- **Telegram**: https://t.me/d_maximyuk
- **GitHub**: https://github.com/dmaximyuk

## 📄 License  
This template is publicly available for any use.  
Feel free to use, modify, and share it!  
