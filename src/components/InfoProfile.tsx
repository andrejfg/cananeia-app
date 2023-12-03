import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import { Image, ImageSource } from 'expo-image'

interface InfoProfileProps {
  usuario: {
    imagem: ImageSource
    nome: string
    polo: string
    nomePolo: string
    numeroDePublicacoes: number
  }
}

/**
 * Renders the profile information of a user.
 * @param {InfoProfileProps} props - The props object containing the user information.
 * @param {object} props.usuario - The user object containing the profile information.
 * @param {ImageSource} props.usuario.imagem - The image source for the user's profile picture.
 * @param {string} props.usuario.nome - The name of the user.
 * @param {string} props.usuario.polo - The user's polo.
 * @param {string} props.usuario.nomePolo - The name of the user's polo.
 * @param {number} props.usuario.numeroDePublicacoes - The number of publications by the user.
 * @returns A component that displays the user's information
 */
export default function InfoProfile({ usuario }: InfoProfileProps) {
  return (
    <View style={tw`flex-1 flex-row gap-8 p-4`}>
      <View style={tw`items-center`}>
        <Image
          style={tw`aspect-square h-20 rounded-full`}
          source={require('@/assets/images/exemploPerfil.jpg')}
          alt="Imagem de Perfil"
        />
        <Text style={tw`font-roboto_semi text-sm`}>{usuario.nome}</Text>
      </View>
      <View style={tw`flex-1 flex-row justify-around`}>
        <View style={tw`items-center justify-center`}>
          <Text style={tw`font-roboto_semi text-lg`}>{usuario.polo}</Text>
          <Text style={tw`font-roboto text-sm`}>{usuario.nomePolo}</Text>
        </View>
        <View style={tw`items-center justify-center`}>
          <Text style={tw`font-roboto_semi text-lg`}>
            {usuario.numeroDePublicacoes}
          </Text>
          <Text style={tw`font-roboto text-sm`}>Publicações</Text>
        </View>
      </View>
    </View>
  )
}
