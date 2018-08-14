import axios from 'axios'

const requestData = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  timeout: 30000
})

// Add a request interceptor
axios.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// Add a response interceptor
axios.interceptors.response.use(
  response => response,
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

export default requestData
