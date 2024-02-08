import axios from 'axios'

export const baseURL = 'http://3.145.166.119'

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
