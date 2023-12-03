import { ScrollView, View } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import CustomButton from '@/components/CustomButton'
import InfoProfile from '@/components/InfoProfile'
import HeaderProfile from '@/components/HeaderProfile'
import ProfileFeedItem from '@/components/ProfileFeedItem'

/**
 * Renders the profile screen component.
 * @returns The rendered profile screen component.
 */
export default function PerfilScreen() {
  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderProfile nick="fg.andre" />
      <ScrollView style={tw`flex-1`}>
        <InfoProfile
          usuario={{
            imagem: require('@/assets/images/exemploPerfil.jpg'),
            nome: 'André Felipe',
            nomePolo: 'Cananéia',
            polo: ' Polo XI',
            numeroDePublicacoes: 50,
          }}
        />
        <View style={tw`gap-4`}>
          <View style={tw`items-center`}>
            <CustomButton label="Editar perfil" />
          </View>
          <View style={tw`flex-1 flex-row flex-wrap items-start gap-1 pl-1.5`}>
            {Array.from({ length: 5 }).map((_, index) => {
              return (
                <ProfileFeedItem
                  key={index}
                  source={require('@/assets/images/exemploFeed.png')}
                />
              )
            })}
          </View>
        </View>
      </ScrollView>
    </View>
  )
}
