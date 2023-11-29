import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import { Image, ImageSource } from 'expo-image'

interface PerfilFeedItemProps {
  source: ImageSource
}

export default function PerfilFeedItem({ source }: PerfilFeedItemProps) {
  return (
    <Image
      style={tw`aspect-square w-[32%]`}
      source={source}
      alt="imagem do feed"
      placeholder={blurhash}
    />
  )
}
