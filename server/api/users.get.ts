// 模擬用戶數據
const users = [
  { id: 1, name: '張三', email: 'zhang@example.com', age: 28, city: '台北' },
  { id: 2, name: '李四', email: 'li@example.com', age: 32, city: '台中' },
  { id: 3, name: '王五', email: 'wang@example.com', age: 25, city: '高雄' },
  { id: 4, name: '陳六', email: 'chen@example.com', age: 35, city: '台南' },
  { id: 5, name: '林七', email: 'lin@example.com', age: 29, city: '桃園' }
]

export default defineEventHandler(async (event) => {
  // 模擬 API 延遲
  await new Promise(resolve => setTimeout(resolve, 500))
  
  return {
    success: true,
    data: users,
    message: '成功獲取用戶列表'
  }
})