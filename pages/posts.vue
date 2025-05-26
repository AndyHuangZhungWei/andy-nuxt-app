<template>
  <div>
    <!-- 頁面標題 -->
    <div class="mb-8">
      <h1 class="text-3xl font-bold text-gray-800 mb-2">技術文章</h1>
      <p class="text-gray-600">探索最新的前端開發技術和最佳實踐</p>
    </div>

    <!-- 載入狀態 -->
    <Loading v-if="pending" message="正在載入文章..." />

    <!-- 錯誤狀態 -->
    <div v-else-if="error" class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
      <h3 class="font-bold">載入失敗</h3>
      <p>{{ error.message }}</p>
      <button @click="refresh()" class="mt-2 btn-primary">
        重新載入
      </button>
    </div>

    <!-- 文章列表 -->
    <div v-else-if="data?.success && data.data">
      <div class="mb-6 flex items-center justify-between">
        <p class="text-gray-600">
          共有 <span class="font-semibold text-blue-600">{{ data.data.length }}</span> 篇文章
        </p>
        <div class="flex items-center space-x-4">
          <select 
            v-model="sortBy" 
            @change="sortPosts"
            class="border border-gray-300 rounded px-3 py-1 text-sm"
          >
            <option value="publishedAt">發布時間</option>
            <option value="views">瀏覽次數</option>
            <option value="title">標題</option>
          </select>
          <button @click="refresh()" class="btn-secondary">
            🔄 重新整理
          </button>
        </div>
      </div>
      
      <div class="grid gap-6 md:grid-cols-2">
        <PostCard 
          v-for="post in sortedPosts" 
          :key="post.id" 
          :post="post" 
        />
      </div>
    </div>

    <!-- 空狀態 -->
    <div v-else class="text-center py-12">
      <div class="text-6xl mb-4">📝</div>
      <h3 class="text-xl font-semibold text-gray-700 mb-2">沒有找到文章</h3>
      <p class="text-gray-500">目前沒有任何文章內容。</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// 設置頁面 meta
useHead({
  title: '技術文章 - Nuxt.js 範例程式',
  meta: [
    { name: 'description', content: '瀏覽前端開發相關的技術文章和教學內容' }
  ]
})

// 調用 API 獲取文章數據
const { data, pending, error, refresh } = await useFetch('/api/posts')

// 排序選項
const sortBy = ref('publishedAt')

// 類型定義
interface Post {
  id: number
  title: string
  content: string
  author: string
  publishedAt: string
  category: string
  views: number
}

interface ApiResponse {
  success: boolean
  data: Post[]
  message: string
}

// 計算排序後的文章
const sortedPosts = computed(() => {
  if (!data.value?.data) return []
  
  const posts = [...data.value.data]
  
  switch (sortBy.value) {
    case 'views':
      return posts.sort((a, b) => b.views - a.views)
    case 'title':
      return posts.sort((a, b) => a.title.localeCompare(b.title))
    case 'publishedAt':
    default:
      return posts.sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
  }
})

// 排序方法
const sortPosts = () => {
  // 觸發重新計算
  nextTick()
}
</script>