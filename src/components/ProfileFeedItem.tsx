import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import { Image, ImageSource } from 'expo-image'

interface ProfileFeedItemProps {
  source: ImageSource
}

export default function ProfileFeedItem({ source }: ProfileFeedItemProps) {
  return (
    <Image
      style={tw`aspect-square w-[32%]`}
      source={source}
      alt="imagem do feed"
      placeholder={blurhash}
    />
  )
}
