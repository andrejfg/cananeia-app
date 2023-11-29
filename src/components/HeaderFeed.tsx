import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'

export default function HeaderFeed() {
  return (
    <View style={tw`w-full border-b-[0.5px] border-b-gray-300 bg-white p-3`}>
      <Text style={tw`font-choice text-2xl`}>COMEERJ 2023</Text>
    </View>
  )
}