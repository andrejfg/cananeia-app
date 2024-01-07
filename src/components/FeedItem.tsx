import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import { Image } from 'expo-image'
import { Text, TouchableOpacity, View } from 'react-native'
// import LikeButton from './FeedButtons/LikeButton'
// import CommentButton from './FeedButtons/CommentButton'
import FeedItemType from '@/types/FeedItem'
import imageUrl from '@/utils/imageUrl'
import VectorIcon from './VectorIcon'
import { useState } from 'react'
import FeedModal from './FeedModal'
import deletePublicacao from '@/api/publicacao/delete'
import aceitarPublicacao from '@/api/publicacao/aceitar'
import Toast from 'react-native-root-toast'

interface FeedItemProps {
  feed: FeedItemType
  isAprovados: boolean
}

/**
 * Represents a single item in a feed, displaying user information, an image, and post details.
 * @param {FeedItemProps} props - The props object containing the necessary data for rendering the feed item.
 * @returns A React component representing a feed item.
 */
export default function FeedItem({ feed, isAprovados }: FeedItemProps) {
  const [optionVisible, setOptionsVisible] = useState(false)
  const [approvedOrDeleted, setApprovedOrDeleted] = useState(false)
  function toogleOptionsVisibility() {
    setOptionsVisible((prev) => !prev)
  }

  async function deleteItem() {
    await deletePublicacao(feed.id)
    setApprovedOrDeleted(true)
    setOptionsVisible(false)
    Toast.show('Publicação aprovada!', {
      position: 0,
      backgroundColor: '#368cd7a6',
      textColor: 'white',
      duration: Toast.durations.SHORT,
    })
  }

  async function acceptItem() {
    await aceitarPublicacao(feed.id)
    setApprovedOrDeleted(true)
    setOptionsVisible(false)
    Toast.show('Publicação aprovada!', {
      position: 0,
      backgroundColor: '#368cd7a6',
      textColor: 'white',
      duration: Toast.durations.SHORT,
    })
  }

  return (
    !approvedOrDeleted && (
      <View>
        <View style={tw`flex-row items-center justify-between pr-2`}>
          <View style={tw`flex-row gap-2 p-4`}>
            <Image
              style={[tw`aspect-square h-10 rounded-full`]}
              source={imageUrl(
                feed.participante?.usuario?.perfilImagem?.nome ||
                  feed.polo?.usuario?.perfilImagem?.nome,
              )}
              placeholder={blurhash}
              alt="imagem do perfil"
            />
            <View>
              <Text style={tw`font-roboto_bold`}>
                {feed.participante?.usuario?.usuario ||
                  feed.polo?.usuario?.usuario}
              </Text>
              <Text style={tw`font-roboto`}>
                {feed.participante?.polo?.nome || feed.polo?.nome}
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={tw`rounded-full p-2`}
            activeOpacity={0.7}
            onPress={toogleOptionsVisibility}
          >
            <VectorIcon name="dots-vertical" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Image
          style={{ aspectRatio: '4/5' }}
          source={imageUrl(feed.imagem.nome)}
          placeholder={feed.imagem.hash}
          alt="imagem do feed"
        />
        <View style={tw`flex-row items-center gap-8 p-2 px-4`}>
          {/* <LikeButton /> */}
          {/* <CommentButton /> */}
        </View>
        <View style={tw`gap-1 px-3`}>
          <Text>
            <Text onPress={() => console.log()} style={tw`font-roboto_bold`}>
              {(feed.participante?.usuario?.usuario ||
                feed.polo?.usuario?.usuario) + ' '}
            </Text>
            <Text>{feed.descricao}</Text>
          </Text>
          {/* {postagem.numeroDeComentarios !== 0 && (
          <View>
            <Text style={tw`text-gray-400`}>
              Ver todos os {postagem.numeroDeComentarios} comentários
            </Text>
          </View>
        )} */}
        </View>
        <FeedModal
          optionVisible={optionVisible}
          toogleOptionsVisibility={toogleOptionsVisibility}
          isAprovados={isAprovados}
          deleteItem={deleteItem}
          acceptItem={acceptItem}
        />
      </View>
    )
  )
}
