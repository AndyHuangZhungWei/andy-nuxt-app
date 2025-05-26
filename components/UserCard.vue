<template>
  <div class="card">
    <div class="flex items-center space-x-4">
      <div class="w-16 h-16 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl">
        {{ user.name.charAt(0) }}
      </div>
      <div class="flex-1">
        <h3 class="text-lg font-semibold text-gray-800">{{ user.name }}</h3>
        <p class="text-gray-600">{{ user.email }}</p>
        <div class="flex items-center space-x-4 mt-2 text-sm text-gray-500">
          <span>📍 {{ user.city }}</span>
          <span>🎂 {{ user.age }}歲</span>
        </div>
      </div>
      <div class="text-right">
        <NuxtLink 
          :to="`/users/${user.id}`"
          class="btn-primary text-sm"
        >
          查看詳情
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface User {
  id: number
  name: string
  email: string
  age: number
  city: string
}

defineProps<{
  user: User
}>()
</script>