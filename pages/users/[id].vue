<template>
  <div>
    <!-- 返回按鈕 -->
    <div class="mb-6">
      <NuxtLink 
        to="/users" 
        class="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
      >
        ← 返回用戶列表
      </NuxtLink>
    </div>

    <!-- 載入狀態 -->
    <Loading v-if="pending" message="正在載入用戶詳情..." />

    <!-- 錯誤狀態 -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
      <h3 class="font-bold">載入失敗</h3>
      <p>{{ error.message }}</p>
      <button @click="refresh()" class="mt-2 btn-primary">
        重新載入
      </button>
    </div>

    <!-- 用戶詳情 -->
    <div v-else-if="data?.success && data.data" class="max-w-2xl">
      <div class="card">
        <!-- 用戶頭像和基本信息 -->
        <div class="text-center mb-8">
          <div class="w-24 h-24 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-3xl mx-auto mb-4">
            {{ data.data.name.charAt(0) }}
          </div>
          <h1 class="text-3xl font-bold text-gray-800 mb-2">{{ data.data.name }}</h1>
          <p class="text-gray-600">{{ data.data.email }}</p>
        </div>

        <!-- 詳細信息 -->
        <div class="grid md:grid-cols-2 gap-6">
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">🎂</span>
              <div>
                <h3 class="font-semibold text-gray-700">年齡</h3>
                <p class="text-gray-600">{{ data.data.age }} 歲</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">📍</span>
              <div>
                <h3 class="font-semibold text-gray-700">居住城市</h3>
                <p class="text-gray-600">{{ data.data.city }}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">📧</span>
              <div>
                <h3 class="font-semibold text-gray-700">電子郵件</h3>
                <p class="text-gray-600">{{ data.data.email }}</p>
              </div>
            </div>
          </div>
          
          <div class="space-y-4">
            <div class="flex items-center space-x-3">
              <span class="text-2xl">📞</span>
              <div>
                <h3 class="font-semibold text-gray-700">聯絡電話</h3>
                <p class="text-gray-600">{{ data.data.phone }}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">🏢</span>
              <div>
                <h3 class="font-semibold text-gray-700">部門</h3>
                <p class="text-gray-600">{{ data.data.department }}</p>
              </div>
            </div>
            
            <div class="flex items-center space-x-3">
              <span class="text-2xl">🆔</span>
              <div>
                <h3 class="font-semibold text-gray-700">用戶 ID</h3>
                <p class="text-gray-600">#{{ data.data.id }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- 操作按鈕 -->
        <div class="flex space-x-4 mt-8 pt-6 border-t">
          <button class="btn-primary flex-1">
            📝 編輯資料
          </button>
          <button class="btn-secondary flex-1">
            💬 發送訊息
          </button>
        </div>
      </div>
    </div>

    <!-- 找不到用戶 -->
    <div v-else class="text-center py-12">
      <div class="text-6xl mb-4">❌</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">找不到用戶</h3>
      <p class="text-gray-500">請確認用戶 ID 是否正確。</p>
      <NuxtLink to="/users" class="btn-primary mt-4">
        返回用戶列表
      </NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
// 獲取路由參數
const route = useRoute()
const userId = route.params.id

// 設置頁面 meta
useHead({
  title: `用戶詳情 - Nuxt.js 範例程式`,
  meta: [
    { name: 'description', content: `查看用戶 ${userId} 的詳細資訊` }
  ]
})

// 調用 API 獲取用戶詳情
const { data, pending, error, refresh } = await useFetch(`/api/users/${userId}`)

// 類型定義
interface UserDetail {
  id: number
  name: string
  email: string
  age: number
  city: string
  phone: string
  department: string
}

interface ApiResponse {
  success: boolean
  data: UserDetail
  message: string
}
</script> 