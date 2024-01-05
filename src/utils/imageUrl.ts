import { baseURL } from '@/api/api'

export default function imageUrl(nome?: string) {
  return `${baseURL}/upload/${nome}`
}
