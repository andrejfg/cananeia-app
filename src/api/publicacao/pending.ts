import { api } from '../api'
import FeedItemType from '@/types/FeedItem'

export default async function getPendingFeed(): Promise<FeedItemType[] | null> {
  return await api
    .get('/publicacao/pending')
    .then(function (response) {
      return response.data as FeedItemType[]
    })
    .catch(function () {
      return null
    })
}
