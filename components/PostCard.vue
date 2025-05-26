<template>
  <article class="card">
    <div class="mb-4">
      <div class="flex items-center justify-between mb-2">
        <span class="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
          {{ post.category }}
        </span>
        <span class="text-gray-500 text-sm">{{ formatDate(post.publishedAt) }}</span>
      </div>
      <h2 class="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
        {{ post.title }}
      </h2>
      <p class="text-gray-600 line-clamp-3">{{ post.content }}</p>
    </div>
    
    <div class="flex items-center justify-between text-sm text-gray-500 border-t pt-4">
      <div class="flex items-center space-x-2">
        <span>✍️ {{ post.author }}</span>
      </div>
      <div class="flex items-center space-x-2">
        <span>👁️ {{ post.views.toLocaleString() }}</span>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
interface Post {
  id: number
  title: string
  content: string
  author: string
  publishedAt: string
  category: string
  views: number
}

defineProps<{
  post: Post
}>()

const formatDate = (dateString: string) => {
  return new Date(dateString).toLocaleDateString('zh-TW')
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>