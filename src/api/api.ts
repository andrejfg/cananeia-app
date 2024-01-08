import { ipDoServidorAtom } from '@/atoms/user'
import axios from 'axios'
import { useAtom } from 'jotai'

export const baseURL = 'http://18.228.119.244'

export function Api() {
  const [ipDoServidor] = useAtom(ipDoServidorAtom)

  return axios.create({
    baseURL: ipDoServidor,
  })
}

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
