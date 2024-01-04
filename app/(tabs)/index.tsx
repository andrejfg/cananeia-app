import getFeed from '@/api/publicacao/feed'
import FeedItem from '@/components/FeedItem'
import HeaderFeed from '@/components/HeaderFeed'
import tw from '@/lib/tailwind'
import FeedItemType from '@/types/FeedItem'
import React, { useEffect, useState } from 'react'
import { View, ScrollView } from 'react-native'
import Toast from 'react-native-root-toast'

/**
 * Renders the feed screen component.
 * @returns - The rendered feed screen component.
 */
export default function FeedScreen() {
  const [feedItems, setFeedItems] = useState<FeedItemType[] | null>()

  async function getFeedItems() {
    getFeed({}).then((response) => {
      if (response) {
        console.log(response[0])
        setFeedItems(response)
      } else
        Toast.show('Falha ao recuperar o feed!', {
          position: 0,
          backgroundColor: 'red',
          duration: Toast.durations.SHORT,
        })
    })
  }

  useEffect(() => {
    getFeedItems()
  }, [])

  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderFeed />
      <ScrollView style={tw`flex-1`}>
        <View style={tw`flex-1 gap-4 pb-8`}>
          {feedItems &&
            feedItems.map((item) => {
              return <FeedItem key={item.id} feed={item} />
            })}
        </View>
      </ScrollView>
    </View>
  )
}
