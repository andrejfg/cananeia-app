import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import { MonoText } from '@/components/StyledText'

export default function MusicaScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold`}>MÚSICAS</Text>
      <MonoText style={tw`text-base`}>LISTA DE LETRAS E PARTITURAS</MonoText>
    </View>
  )
}
