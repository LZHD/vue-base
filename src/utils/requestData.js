import axios from 'axios'
import { Message } from 'iview'

const requestData = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30000
})

// 添加请求拦截
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    Message.error(error)
    return Promise.reject(error)
  }
)

// 添加响应拦截
axios.interceptors.response.use(
  response => response,
  error => {
    Message.error('服务内部错误:' + error)
    return Promise.reject(error)
  }
)

export default requestData
