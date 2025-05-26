# Nuxt Minimal Starter

Look at the [Nuxt documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm dev

# yarn
yarn dev

# bun
bun run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build

# pnpm
pnpm build

# yarn
yarn build

# bun
bun run build
```

Locally preview production build:

```bash
# npm
npm run preview

# pnpm
pnpm preview

# yarn
yarn preview

# bun
bun run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

# Nuxt.js + JSON API + Vue.js 範例程式

這是一個使用 Nuxt.js 3、Vue.js 和內建 JSON API 的完整範例程式，展示了現代化前端開發的最佳實踐。

## 🚀 主要功能

- **用戶管理**: 用戶列表展示和詳情查看
- **文章系統**: 技術文章展示和分類
- **響應式設計**: 支援各種設備尺寸
- **載入狀態**: 優雅的載入和錯誤處理
- **現代化 UI**: 使用 Tailwind CSS 建構

## 🛠 技術棧

- **Nuxt.js 3**: 全棧 Vue.js 框架
- **Vue.js 3**: 漸進式 JavaScript 框架
- **TypeScript**: 類型安全的 JavaScript
- **Tailwind CSS**: 實用優先的 CSS 框架
- **Server API**: 內建 JSON API 端點

## 📁 專案結構

```
nuxt-json-api-example/
├── assets/
│   └── css/
│       └── main.css          # 主要樣式文件
├── components/
│   ├── UserCard.vue          # 用戶卡片組件
│   ├── PostCard.vue          # 文章卡片組件
│   └── Loading.vue           # 載入組件
├── layouts/
│   └── default.vue           # 預設布局
├── pages/
│   ├── index.vue             # 首頁
│   ├── posts.vue             # 文章列表頁
│   └── users/
│       ├── index.vue         # 用戶列表頁
│       └── [id].vue          # 用戶詳情頁
├── server/
│   └── api/
│       ├── users.get.ts      # 用戶列表 API
│       ├── users/
│       │   └── [id].get.ts   # 用戶詳情 API
│       └── posts.get.ts      # 文章列表 API
├── app.vue                   # 應用程式根組件
├── nuxt.config.ts            # Nuxt 配置文件
└── package.json              # 專案依賴配置
```

## 🔧 安裝和運行

### 1. 安裝依賴

```bash
npm install
```

### 2. 啟動開發伺服器

```bash
npm run dev
```

應用程式將在 `http://localhost:3000` 啟動

### 3. 建構生產版本

```bash
npm run build
```

### 4. 預覽生產版本

```bash
npm run preview
```

## 📋 API 端點

### 用戶相關 API

- `GET /api/users` - 獲取用戶列表
- `GET /api/users/:id` - 獲取特定用戶詳情

### 文章相關 API

- `GET /api/posts` - 獲取文章列表

## 🎨 頁面和功能

### 首頁 (`/`)
- 專案介紹和功能說明
- 快速導航到各個功能模組
- 技術特色展示

### 用戶列表 (`/users`)
- 展示所有用戶的基本資訊
- 支援重新整理功能
- 載入狀態和錯誤處理

### 用戶詳情 (`/users/:id`)
- 顯示特定用戶的完整資訊
- 包括聯絡方式和部門資訊
- 支援返回用戶列表

### 文章列表 (`/posts`)
- 展示技術文章內容
- 支援按時間、瀏覽次數、標題排序
- 文章分類和作者資訊

## 🔧 自定義配置

### Tailwind CSS
專案使用 Tailwind CSS 進行樣式設計，你可以在 `assets/css/main.css` 中自定義樣式。

### API 數據
模擬數據位於 `server/api/` 目錄中，你可以修改這些文件來調整 API 回應的數據。

### 組件樣式
所有組件都使用 Tailwind CSS 類別，可以輕鬆自定義外觀和感覺。

## 📱 響應式設計

專案完全支援響應式設計：
- **桌面**: 完整的多欄布局
- **平板**: 適應中等螢幕尺寸
- **手機**: 單欄垂直布局

## 🚦 開發最佳實踐

- **組件化**: 每個功能都封裝成可重用組件
- **類型安全**: 使用 TypeScript 提供類型檢查
- **錯誤處理**: 完善的載入和錯誤狀態處理
- **性能優化**: 使用 Nuxt.js 的內建優化功能
- **代碼組織**: 清晰的檔案結構和命名規範

## 🤝 貢獻

歡迎提交 Issue 和 Pull Request 來改進這個範例專案。

## 📄 授權

此專案採用 MIT 授權條款。