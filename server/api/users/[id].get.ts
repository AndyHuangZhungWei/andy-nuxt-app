// 模擬用戶數據
const users = [
  { id: 1, name: '張三', email: 'zhang@example.com', age: 28, city: '台北', phone: '0912-345-678', department: '資訊部' },
  { id: 2, name: '李四', email: 'li@example.com', age: 32, city: '台中', phone: '0923-456-789', department: '行銷部' },
  { id: 3, name: '王五', email: 'wang@example.com', age: 25, city: '高雄', phone: '0934-567-890', department: '財務部' },
  { id: 4, name: '陳六', email: 'chen@example.com', age: 35, city: '台南', phone: '0945-678-901', department: '人資部' },
  { id: 5, name: '林七', email: 'lin@example.com', age: 29, city: '桃園', phone: '0956-789-012', department: '業務部' },
  { id: 6, name: '張三2', email: 'zhang2@example.com', age: 28, city: '台北2', phone: '0911-345-678', department: '資訊部2' },
  { id: 7, name: '李四2', email: 'li2@example.com', age: 32, city: '台中2', phone: '0922-456-789', department: '行銷部2' },
  { id: 8, name: '王五2', email: 'wang2@example.com', age: 25, city: '高雄2', phone: '0933-567-890', department: '財務部2' },
  { id: 9, name: '陳六2', email: 'chen2@example.com', age: 35, city: '台南2', phone: '0943-678-901', department: '人資部2' },
  { id: 10, name: '林七2', email: 'lin2@example.com', age: 29, city: '桃園2', phone: '0955-789-012', department: '業務部2' }
]

export default defineEventHandler(async (event) => {
  const id = parseInt(getRouterParam(event, 'id') || '0')
  
  // 模擬 API 延遲
  await new Promise(resolve => setTimeout(resolve, 300))
  
  const user = users.find(u => u.id === id)
  
  if (!user) {
    throw createError({
      statusCode: 404,
      statusMessage: '用戶不存在'
    })
  }
  
  return {
    success: true,
    data: user,
    message: '成功獲取用戶詳情'
  }
})