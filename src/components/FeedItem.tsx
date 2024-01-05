import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import { Image } from 'expo-image'
import { Text, View } from 'react-native'
import LikeButton from './FeedButtons/LikeButton'
import CommentButton from './FeedButtons/CommentButton'
import FeedItemType from '@/types/FeedItem'
import imageUrl from '@/utils/imageUrl'

interface FeedItemProps {
  feed: FeedItemType
}

/**
 * Represents a single item in a feed, displaying user information, an image, and post details.
 * @param {FeedItemProps} props - The props object containing the necessary data for rendering the feed item.
 * @returns A React component representing a feed item.
 */
export default function FeedItem({ feed }: FeedItemProps) {
  return (
    <View>
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
            {feed.participante?.usuario?.usuario || feed.polo?.usuario?.usuario}
          </Text>
          <Text style={tw`font-roboto`}>
            {feed.participante?.polo?.nome || feed.polo?.nome}
          </Text>
        </View>
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
    </View>
  )
}
