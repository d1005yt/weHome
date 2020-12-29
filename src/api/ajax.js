import axios from 'axios'

const instance = axios.create({
  baseURL: '/we',
  timeout: 15000, // 指定处理请求超时时间
})

// axios请求拦截器
instance.interceptors.request.use(config => {
  return config
})

// axios响应截器
instance.interceptors.response.use(
  response => {
    return response.data
  },
  error => {
    alert(`请求出错: ${error.message || '未知错误'}`)
    return Promise.reject(error)
  }
)
export default instance

