import Usuario from '@/types/Usuario'
import { api } from '../api'

export default async function whoami(): Promise<Usuario | null> {
  try {
    return await api.get('/whoami/').then(function (response) {
      return response.data as Usuario
    })
  } catch (e) {
    return null
  }
}
