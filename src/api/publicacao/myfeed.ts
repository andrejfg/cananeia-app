import { api } from '../api'
import FeedItemType from '@/types/FeedItem'

export default async function getMyFeed(
  tipo: number,
): Promise<FeedItemType[] | null> {
  return await api
    .get('/publicacao/my', { params: { tipo } })
    .then(function (response) {
      return response.data as FeedItemType[]
    })
    .catch(function () {
      return null
    })
}
