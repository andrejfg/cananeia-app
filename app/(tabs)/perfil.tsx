import { RefreshControl, ScrollView, View } from 'react-native'
import tw from '@/lib/tailwind'
import CustomButton from '@/components/CustomButton'
import InfoProfile from '@/components/InfoProfile'
import HeaderProfile from '@/components/HeaderProfile'
import ProfileFeedItem from '@/components/ProfileFeedItem'
import { useEffect, useState } from 'react'
import FeedItemType from '@/types/FeedItem'
import getMyFeed from '@/api/publicacao/myfeed'
import Toast from 'react-native-root-toast'
import GetUsuario from '@/utils/getUsuario'

/**
 * Renders the profile screen component.
 * @returns The rendered profile screen component.
 */

export default function PerfilScreen() {
  const user = GetUsuario()
  const [myFeedList, setMyFeedList] = useState<FeedItemType[]>([])
  const [refreshing, setRefreshing] = useState(false)

  async function getMyFeedList() {
    setRefreshing(true)
    if (user) {
      const myfeed = await getMyFeed(user?.tipo)
      if (myfeed) {
        setMyFeedList(myfeed)
      } else {
        Toast.show('Falha ao recuperar os items do feed!', {
          position: 0,
          backgroundColor: 'red',
          duration: Toast.durations.LONG,
        })
      }
    }
    setRefreshing(false)
  }

  useEffect(() => {
    getMyFeedList()
  }, [])

  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderProfile nick={user?.usuario || 'USUARIO'} />
      <ScrollView
        style={tw`flex-1`}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getMyFeedList} />
        }
      >
        {user && (
          <InfoProfile usuario={user} numeroDePublicacoes={myFeedList.length} />
        )}
        <View style={tw`gap-4`}>
          <View style={tw`items-center`}>
            <CustomButton label="Editar perfil" />
          </View>
          <View style={tw`flex-1 flex-row flex-wrap items-start gap-1 pl-1.5`}>
            {myFeedList &&
              myFeedList
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime(),
                )
                .map((item) => {
                  return <ProfileFeedItem key={item.id} item={item} />
                })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
