import { api } from '../api'
import FeedItemType from '@/types/FeedItem'

type getFeedProps = {
  newer?: Date
  older?: Date
}

export default async function getFeed({
  newer,
  older,
}: getFeedProps): Promise<FeedItemType[] | null> {
  return await api
    .get('/publicacao/feed', { params: { newer, older } })
    .then(function (response) {
      return response.data as FeedItemType[]
    })
    .catch(function () {
      return null
    })
}
