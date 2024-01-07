import tw from '@/lib/tailwind'
import { Image } from 'expo-image'
import FeedItemType from '@/types/FeedItem'
import imageUrl from '@/utils/imageUrl'

interface ProfileFeedItemProps {
  item: FeedItemType
}

export default function ProfileFeedItem({ item }: ProfileFeedItemProps) {
  return (
    <Image
      style={tw`aspect-square w-[32%]`}
      source={imageUrl(item.imagem.nome)}
      alt="imagem do feed"
      placeholder={item.imagem.hash}
    />
  )
}
