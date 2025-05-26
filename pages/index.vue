<template>
  <div>
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-8 mb-8">
      <div class="max-w-3xl">
        <h1 class="text-4xl font-bold mb-4">
          歡迎使用 Nuxt.js 範例程式
        </h1>
        <p class="text-lg mb-6">
          這是一個展示 Nuxt.js + Vue.js + JSON API 整合的簡易範例。
          包含用戶管理、文章展示等功能，使用現代化的技術棧開發。
        </p>
        <div class="flex space-x-4">
          <NuxtLink to="/users" class="bg-white text-blue-600 px-6 py-2 rounded font-semibold hover:bg-gray-100 transition-colors">
            查看用戶
          </NuxtLink>
          <NuxtLink to="/posts" class="border border-white px-6 py-2 rounded font-semibold hover:bg-white hover:text-blue-600 transition-colors">
            閱讀文章
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- 功能介紹 -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
      <div class="card">
        <div class="text-3xl mb-4">🚀</div>
        <h3 class="text-xl font-semibold mb-2">Nuxt.js 3</h3>
        <p class="text-gray-600">使用最新的 Nuxt.js 3 框架，享受優秀的開發體驗和性能表現。</p>
      </div>
      
      <div class="card">
        <div class="text-3xl mb-4">⚡</div>
        <h3 class="text-xl font-semibold mb-2">Vue.js 組件化</h3>
        <p class="text-gray-600">採用 Vue.js 的組件化開發模式，代碼更易維護和重用。</p>
      </div>
      
      <div class="card">
        <div class="text-3xl mb-4">🔗</div>
        <h3 class="text-xl font-semibold mb-2">JSON API</h3>
        <p class="text-gray-600">內建 JSON API 端點，演示前後端數據交互的完整流程。</p>
      </div>
      
      <div class="card">
        <div class="text-3xl mb-4">🎨</div>
        <h3 class="text-xl font-semibold mb-2">Tailwind CSS</h3>
        <p class="text-gray-600">使用 Tailwind CSS 快速建構現代化的響應式界面。</p>
      </div>
      
      <div class="card">
        <div class="text-3xl mb-4">📱</div>
        <h3 class="text-xl font-semibold mb-2">響應式設計</h3>
        <p class="text-gray-600">支持各種設備尺寸，提供優秀的跨平台用戶體驗。</p>
      </div>
      
      <div class="card">
        <div class="text-3xl mb-4">⚙️</div>
        <h3 class="text-xl font-semibold mb-2">TypeScript</h3>
        <p class="text-gray-600">使用 TypeScript 提供類型安全，減少運行時錯誤。</p>
      </div>
    </div>

    <!-- 快速開始 -->
    <div class="card">
      <h2 class="text-2xl font-bold mb-4">快速開始</h2>
      <div class="space-y-4">
        <div class="flex items-start space-x-3">
          <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">1</span>
          <div>
            <h4 class="font-semibold">安裝依賴</h4>
            <code class="bg-gray-100 px-2 py-1 rounded text-sm">npm install</code>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">2</span>
          <div>
            <h4 class="font-semibold">啟動開發伺服器</h4>
            <code class="bg-gray-100 px-2 py-1 rounded text-sm">npm run dev</code>
          </div>
        </div>
        <div class="flex items-start space-x-3">
          <span class="bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold">3</span>
          <div>
            <h4 class="font-semibold">開始探索</h4>
            <p class="text-gray-600">瀏覽用戶列表和文章頁面，體驗完整功能。</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// 設置頁面 meta
useHead({
  title: '首頁 - Nuxt.js 範例程式',
  meta: [
    { name: 'description', content: '使用 Nuxt.js + Vue.js + JSON API 建構的現代化網頁應用程式範例' }
  ]
})
</script>