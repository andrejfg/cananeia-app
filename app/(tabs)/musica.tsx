import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'

/**
 * Renders the MusicaScreen component.
 * @returns - The rendered MusicaScreen component.
 */
export default function MusicaScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center`}>
      <Text style={tw`text-xl font-bold`}>MÚSICAS</Text>
      <Text style={tw`text-base`}>LISTA DE LETRAS E PARTITURAS</Text>
    </View>
  )
}
