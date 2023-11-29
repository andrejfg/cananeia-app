import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'

interface HeaderPerfilProps {
  nick: string
}

export default function HeaderPerfil({ nick }: HeaderPerfilProps) {
  return (
    <View style={tw`w-full border-b-[0.5px] border-b-gray-300 bg-white p-4`}>
      <Text style={tw`font-roboto_bold text-xl`}>{nick}</Text>
    </View>
  )
}
