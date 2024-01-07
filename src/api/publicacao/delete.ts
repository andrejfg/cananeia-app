import { api } from '../api'

export default async function deletePublicacao(id: string) {
  return await api.delete(`/publicacao/${id}`).catch(function () {
    return null
  })
}
