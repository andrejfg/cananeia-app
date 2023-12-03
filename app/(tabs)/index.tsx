import FeedItem from '@/components/FeedItem'
import HeaderFeed from '@/components/HeaderFeed'
import tw from '@/lib/tailwind'
import React from 'react'
import { View, ScrollView } from 'react-native'

/**
 * Renders the feed screen component.
 * @returns - The rendered feed screen component.
 */
export default function FeedScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderFeed />
      <ScrollView style={tw`flex-1`}>
        <View style={tw`flex-1 gap-4 pb-8`}>
          {Array.from({ length: 5 }).map((_, index) => {
            return (
              <FeedItem
                key={index}
                usuario={{
                  imgPerfil: require('@/assets/images/exemploPerfil.jpg'),
                  nick: 'fg.andre',
                  polo: 'Polo XI - Cananéia',
                }}
                imagem={{
                  source: require('@/assets/images/exemploFeed.png'),
                  proportion: index % 2 === 0 ? '5/4' : '4/5',
                }}
                postagem={{
                  descricao:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
                  numeroDeComentarios: index,
                }}
              />
            )
          })}
        </View>
      </ScrollView>
    </View>
  )
}
