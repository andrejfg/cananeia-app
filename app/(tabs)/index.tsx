import getFeed from '@/api/publicacao/feed'
import getPendingFeed from '@/api/publicacao/pending'
import FeedItem from '@/components/FeedItem'
import HeaderFeed from '@/components/HeaderFeed'
import tw from '@/lib/tailwind'
import FeedItemType from '@/types/FeedItem'
import { useEffect, useState } from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'
import Toast from 'react-native-root-toast'

/**
 * Renders the feed screen component.
 * @returns - The rendered feed screen component.
 */
export default function FeedScreen() {
  const [feedItems, setFeedItems] = useState<FeedItemType[] | null>()
  const [isAprovados, setIsAprovados] = useState(true)
  const [refreshing, setRefreshing] = useState(false)

  async function getFeedItems() {
    setRefreshing(true)
    if (isAprovados) await getAprovedFeedItems()
    else await getPendingFeedItems()
    setRefreshing(false)
  }

  async function getAprovedFeedItems() {
    const feed = await getFeed({})
    if (feed) {
      setFeedItems(feed)
    } else
      Toast.show('Falha ao recuperar o feed!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.SHORT,
      })
  }
  async function getPendingFeedItems() {
    const feed = await getPendingFeed()
    if (feed) {
      setFeedItems(feed)
    } else
      Toast.show('Falha ao recuperar o feed!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.SHORT,
      })
  }

  function toogleAprovados() {
    setIsAprovados((prev) => !prev)
  }

  useEffect(() => {
    getFeedItems()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAprovados])

  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderFeed isAprovados={isAprovados} toogleAprovados={toogleAprovados} />
      <ScrollView
        style={tw`flex-1`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getFeedItems} />
        }
      >
        <View style={tw`flex-1 gap-4 pb-8`}>
          {feedItems &&
            feedItems.map((item) => {
              return (
                <FeedItem key={item.id} feed={item} isAprovados={isAprovados} />
              )
            })}
        </View>
      </ScrollView>
    </View>
  )
}
