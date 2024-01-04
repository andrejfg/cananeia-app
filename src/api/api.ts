import axios from 'axios'

export const baseURL = 'http://192.168.0.109:3000'

export const api = axios.create({
  baseURL,
})

// api.interceptors.request.use(
//   async (config) => {
//     console.log(config)
//     return config
//   },
//   (error) => Promise.reject(error),
// )
