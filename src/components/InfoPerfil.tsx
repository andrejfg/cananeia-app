import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import { Image, ImageSource } from 'expo-image'

interface InfoPerfilProps {
  usuario: {
    imagem: ImageSource
    nome: string
    polo: string
    nomePolo: string
    numeroDePublicacoes: number
  }
}

export default function InfoPerfil({ usuario }: InfoPerfilProps) {
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
