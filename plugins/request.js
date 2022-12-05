/**
 * 基于 axios 封装的请求模块
 */

 import axios from 'axios'

 // 创建请求对象
 export const request = axios.create({
   baseURL: 'http://realworld.api.fed.lagounews.com'
 })

 //插件，需要注册到nuxt.config.js
 export default ({ store }) => {
    console.log(store)
    request.interceptors.request.use(function (config) {
        const { user } = store.state
        if (user && user.token) {
            config.headers.Authorization = `Token ${user.token}`
        }
        return config
    }, function (error) {
    // 如果请求失败(此时请求还没有发出去)就会进入这里
    // Do something with request error
        return Promise.reject(error)
    })
  }
  