import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import { Image, ImageSource } from 'expo-image'
import { Text, View } from 'react-native'
import LikeButton from './FeedButtons/LikeButton'
import CommentButton from './FeedButtons/CommentButton'

interface FeedItemProps {
  usuario: {
    nick: string
    polo: string
    imgPerfil: ImageSource
  }
  imagem: {
    source: ImageSource
    proportion: string
  }
  postagem: {
    descricao: string
    numeroDeComentarios: number
  }
}

export default function FeedItem({ imagem, usuario, postagem }: FeedItemProps) {
  return (
    <View>
      <View style={tw`flex-row gap-2 p-4`}>
        <Image
          style={[tw`aspect-square h-10 rounded-full`]}
          source={usuario.imgPerfil}
          placeholder={blurhash}
          alt="imagem do perfil"
        />
        <View>
          <Text style={tw`font-roboto_bold`}>{usuario.nick}</Text>
          <Text style={tw`font-roboto`}>{usuario.polo}</Text>
        </View>
      </View>
      <Image
        style={{ aspectRatio: imagem.proportion }}
        source={imagem.source}
        placeholder={blurhash}
        alt="imagem do feed"
      />
      <View style={tw`flex-row items-center gap-8 p-2 px-4`}>
        <LikeButton />
        <CommentButton />
      </View>
      <View style={tw`gap-1 px-3`}>
        <Text>
          <Text onPress={() => console.log()} style={tw`font-roboto_bold`}>
            {usuario.nick + ' '}
          </Text>
          <Text>{postagem.descricao}</Text>
        </Text>
        {postagem.numeroDeComentarios !== 0 && (
          <View>
            <Text style={tw`text-gray-400`}>
              Ver todos os {postagem.numeroDeComentarios} comentários
            </Text>
          </View>
        )}
      </View>
    </View>
  )
}
