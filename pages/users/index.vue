<template>
  <div>
    <!-- 頁面標題 -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">用戶列表</h1>
      <p class="text-gray-600">管理和查看所有用戶資訊</p>
    </div>

    <!-- 載入狀態 -->
    <Loading v-if="pending" message="正在載入用戶數據..." />

    <!-- 錯誤狀態 -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <h3 class="font-bold">載入失敗</h3>
      <p>{{ error.message }}</p>
      <button @click="refresh()" class="mt-2 btn-primary">
        重新載入
      </button>
    </div>

    <!-- 用戶列表 -->
    <div v-else-if="data?.success && data.data">
      <div class="mb-4 flex items-center justify-between">
        <p class="text-gray-600">
          共找到 <span class="font-semibold text-blue-600">{{ data.data.length }}</span> 位用戶
        </p>
        <button @click="refresh()" class="btn-secondary">
          🔄 重新整理
        </button>
      </div>
      
      <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
        <UserCard 
          v-for="user in data.data" 
          :key="user.id" 
          :user="user" 
        />
      </div>
    </div>

    <!-- 空狀態 -->
    <div v-else class="text-center py-12">
      <div class="text-6xl mb-4">👤</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">沒有找到用戶</h3>
      <p class="text-gray-500">目前沒有任何用戶數據。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 設置頁面 meta
useHead({
  title: '用戶列表 - Nuxt.js 範例程式',
  meta: [
    { name: 'description', content: '查看和管理所有用戶的詳細資訊' }
  ]
})

// 調用 API 獲取用戶數據
const { data, pending, error, refresh } = await useFetch('/api/users')

// 類型定義
interface User {
  id: number
  name: string
  email: string
  age: number
  city: string
}

interface ApiResponse {
  success: boolean
  data: User[]
  message: string
}
</script>