<!-- For GitHub Pages/Vercel -->
<meta name="description" content="FSD React Template: Feature-Sliced Design boilerplate for React">
<meta name="keywords" content="fsd, react template, feature sliced design, react boilerplate">
<!-- ======================= -->

# ⚛️ React.js Template — Production-Ready Starter Kit

## 🎯 Purpose
This template is designed for developers who want to kickstart a modern React.js project with a fully optimized setup. It includes everything needed for scalable application development — from FSD architecture routing, state management, and localization to a lightning-fast build powered by Vite and SWC.

## ✨ Features  
1. 🧭 [TanStack Router](https://tanstack.com/router) — modern, type-safe routing solution;
2. ⚡ T[anStack Query](https://tanstack.com/query) — powerful data fetching and caching layer;
3. 🧠 [TanStack Store](https://tanstack.com/store) — reactive state management with fine-grained control;
4. 🌍 [Intl API](https://www.npmjs.com/package/react-i18next) — full support for internationalization and locale handling;
5. 📦 Build Analyzer — integrated bundle size visualization;
6. 🧩 CSS Injection & Compression — CSS inlined into HTML (IF NEEDED) with Brotli/gzip compression support;
7. ⚙️ SWC Compiler — blazing-fast transpilation for TypeScript and JavaScript;
8. 🔍 ESLint + Prettier + Commitlint — strict code style enforcement out of the box;
9. 🧪 Jest — preconfigured unit testing environment;
10. 🐳 Docker + NGINX — robust deployment setup with containerization.

## 📂 Project Structure
### Structure
```plaintext
├── .husky/        # Git hooks for commit quality
├── src/
│   ├── app/       # App initialization logic
│   ├── entities/  # Domain entities and models
│   ├── features/  # Feature-specific logic
│   ├── pages/     # Application pages
│   ├── shared/    # Shared components and utilities
│   └── index.tsx  # Entry point
├── vite/          # Vite-specific configuration
```

### Analysis

![Build Analysis Screenshot](repository/images/bundle.png)

## 🚀 Quick Start  

### Prerequisites  
- **Node.js**: Ensure you have Node.js >=22.17 installed.  

### Installation
```bash
git clone <repository-url>
cd <project-directory>
npm install
```

### Start Development Server
```bash
npm run dev
```

### Build for Production
```bash
npm run build # <- default
npm run build:insertcss # <- embed CSS in the head index.html
npm run build:insertcss-compress # <- embed CSS in the head index.html and perform file compression
npm run build:compress # <- perform file compression
npm run build:analyzer # <- build and perform an analysis
```

### Run Tests
```bash
npm run test
```

## 📜 Code Standards  
- ✅ 100% TypeScript-first approach.
- 🧩 Modular architecture with Feature-Sliced Design in mind.
- ⚠️ It is strictly checked for compliance with ESLint and steiger (FSD) configuration standards

## 🙎️ Author / Contacts

If you have any questions, feel free to reach out:

- **Email**: d_maksimyk@vk.com
- **Telegram**: https://t.me/d_maximyuk
- **GitHub**: https://github.com/dmaximyuk

## 📄 License  
This template is publicly available for any use.  
Feel free to use, modify, and share it!  
