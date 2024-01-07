import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import { Image } from 'expo-image'
import Usuario from '@/types/Usuario'
import imageUrl from '@/utils/imageUrl'

interface InfoProfileProps {
  usuario: Usuario
  numeroDePublicacoes?: number
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
export default function InfoProfile({
  usuario,
  numeroDePublicacoes,
}: InfoProfileProps) {
  return (
    <View style={tw`flex-row py-4`}>
      <View style={tw`items-center`}>
        <Image
          style={tw`aspect-square h-20 rounded-full `}
          source={imageUrl(usuario.perfilImagem?.nome)}
          placeholder={usuario.perfilImagem?.hash}
          alt="Imagem de Perfil"
        />
        <Text style={tw`w-3/5  text-center font-roboto_semi text-sm`}>
          {usuario?.participante?.nome || usuario?.polo?.nome}
        </Text>
      </View>
      <View style={tw`flex-1 flex-row justify-start `}>
        <View style={tw`items-center justify-center`}>
          <Text style={tw`text-center font-roboto_semi text-lg`}>
            {usuario.participante?.polo?.numero || usuario.polo?.numero}
          </Text>
          <Text style={tw` w-3/5 text-center font-roboto text-sm`}>
            {usuario.participante?.polo?.nome || usuario.polo?.nome}
          </Text>
        </View>
        <View style={tw`items-center justify-center`}>
          <Text style={tw`font-roboto_semi text-lg`}>
            {numeroDePublicacoes || 0}
          </Text>
          <Text style={tw`font-roboto text-sm`}>Publicações</Text>
        </View>
      </View>
    </View>
  )
}
