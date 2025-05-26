<template>
  <div class="min-h-screen bg-gray-50">
    <!-- 導航欄 -->
    <nav class="bg-white shadow-sm border-b">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="flex items-center">
            <NuxtLink to="/" class="text-xl font-bold text-gray-800 hover:text-blue-600">
              🚀 Nuxt Example
            </NuxtLink>
          </div>
          <div class="flex items-center space-x-8">
            <NuxtLink 
              to="/" 
              class="text-gray-600 hover:text-gray-800 transition-colors"
              :class="{ 'text-blue-600 font-semibold': $route.path === '/' }"
            >
              首頁
            </NuxtLink>
            <NuxtLink 
              to="/users" 
              class="text-gray-600 hover:text-gray-800 transition-colors"
              :class="{ 'text-blue-600 font-semibold': $route.path.startsWith('/users') }"
            >
              用戶列表
            </NuxtLink>
            <NuxtLink 
              to="/posts" 
              class="text-gray-600 hover:text-gray-800 transition-colors"
              :class="{ 'text-blue-600 font-semibold': $route.path === '/posts' }"
            >
              文章
            </NuxtLink>
          </div>
        </div>
      </div>
    </nav>

    <!-- 主要內容 -->
    <main class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <slot />
    </main>

    <!-- 頁腳 -->
    <footer class="bg-white border-t mt-12">
      <div class="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div class="text-center text-gray-600">
          <p>&copy; 2024 Nuxt.js + Vue.js + JSON API 範例程式</p>
          <p class="mt-2 text-sm">使用 Nuxt 3 + TypeScript + Tailwind CSS 建構</p>
        </div>
      </div>
    </footer>
  </div>
</template>

<style scoped>
.router-link-active {
  @apply text-blue-600 font-semibold;
}
</style>