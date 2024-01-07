import { api } from '../api'

export default async function aceitarPublicacao(id: string) {
  return await api.put(`/aceitar/${id}`).catch(function () {
    return null
  })
}
