import axios from 'axios'

// 1. 创建axios 实例对象

const request = axios.create()

// 2. 请求拦截器
request.interceptors.request.use(config => {
    return config
},error => {
    return Promise.reject(error)
})

// 3. 响应拦截器
request.interceptors.response.use(res => {
    return res.data
},error => {
    return Promise.reject(error)
})

export default request