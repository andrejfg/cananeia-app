import blurhash from '@/constraints/blurhash'
import tw from '@/lib/tailwind'
import Usuario from '@/types/Usuario'
import imageUrl from '@/utils/imageUrl'
import { Image } from 'expo-image'
import { ImageStyle, StyleProp } from 'react-native'

interface ImageProfileProps {
  usuario: Usuario | null
  style?: StyleProp<ImageStyle> | undefined
}

export default function ImageProfile({ usuario, style }: ImageProfileProps) {
  return (
    <Image
      style={[tw`aspect-square h-20 rounded-full`, style]}
      source={imageUrl(usuario?.perfilImagem?.nome)}
      placeholder={usuario?.perfilImagem?.hash || blurhash}
      alt="Imagem de Perfil"
    />
  )
}
