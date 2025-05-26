// 模擬用戶數據
const users = [
  { id: 1, name: '張三', email: 'zhang@example.com', age: 28, city: '台北' },
  { id: 2, name: '李四', email: 'li@example.com', age: 32, city: '台中' },
  { id: 3, name: '王五', email: 'wang@example.com', age: 25, city: '高雄' },
  { id: 4, name: '陳六', email: 'chen@example.com', age: 35, city: '台南' },
  { id: 5, name: '林七', email: 'lin@example.com', age: 29, city: '桃園' },
  { id: 6, name: '張三2', email: 'zhan2g@example.com', age: 28, city: '台北2' },
  { id: 7, name: '李四2', email: 'li2@example.com', age: 32, city: '台中2' },
  { id: 8, name: '王五2', email: 'wang2@example.com', age: 25, city: '高雄2' },
  { id: 9, name: '陳六2', email: 'chen2@example.com', age: 35, city: '台南2' },
  { id: 10, name: '林七2', email: 'lin2@example.com', age: 29, city: '桃園2' }
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