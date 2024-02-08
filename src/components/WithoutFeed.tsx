import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import VectorIcon from './VectorIcon'

export function WithoutFeed() {
  return (
    <View>
      <View style={tw`my-10 items-center justify-center`}>
        <View>
          <Text style={tw`text-center font-choice text-xl`}>
            {'Ainda sem registros,'}
          </Text>
          <Text style={tw`text-center font-choice text-3xl`}>
            {'seja o primero!'}
          </Text>
        </View>
        <View style={tw`h-40 justify-end`}>
          <VectorIcon name="arrow-down" color="black" size={50} />
        </View>
      </View>
    </View>
  )
}
