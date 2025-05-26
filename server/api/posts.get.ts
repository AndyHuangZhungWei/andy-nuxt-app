// 模擬文章數據
const posts = [
  {
    id: 1,
    title: 'Nuxt.js 入門指南',
    content: '學習如何使用 Nuxt.js 建立現代化的 Vue.js 應用程式...',
    author: '張三',
    publishedAt: '2024-01-15',
    category: '前端開發',
    views: 1250
  },
  {
    id: 2,
    title: 'Vue 3 Composition API 詳解',
    content: 'Composition API 是 Vue 3 的新特性，讓我們深入了解...',
    author: '李四',
    publishedAt: '2024-01-10',
    category: 'Vue.js',
    views: 890
  },
  {
    id: 3,
    title: 'TypeScript 最佳實踐',
    content: '在現代前端開發中，TypeScript 已經成為必備技能...',
    author: '王五',
    publishedAt: '2024-01-08',
    category: 'TypeScript',
    views: 675
  },
  {
    id: 4,
    title: 'Tailwind CSS 快速上手',
    content: '學習如何使用 Tailwind CSS 快速建立美觀的界面...',
    author: '陳六',
    publishedAt: '2024-01-05',
    category: 'CSS',
    views: 542
  }
]

export default defineEventHandler(async (event) => {
  // 模擬 API 延遲
  await new Promise(resolve => setTimeout(resolve, 400))
  
  return {
    success: true,
    data: posts,
    message: '成功獲取文章列表'
  }
})