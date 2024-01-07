import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import GetUsuario from '@/utils/getUsuario'

type HeaderFeedProps = {
  isAprovados: boolean
  toogleAprovados: () => void
}

export default function HeaderFeed({
  isAprovados,
  toogleAprovados,
}: HeaderFeedProps) {
  const usuario = GetUsuario()
  return (
    <View
      style={tw`w-full flex-row justify-between border-b-[0.5px] border-b-gray-300 bg-white p-3`}
    >
      <Text style={tw`font-choice text-2xl`}>COMEERJ 2023</Text>
      {usuario && (usuario.polo || usuario.participante?.comissao) && (
        <CustomButton
          onPress={toogleAprovados}
          style={tw`rounded-full `}
          label={isAprovados ? 'Listar pendentes' : 'Listar aprovados'}
        />
      )}
    </View>
  )
}
