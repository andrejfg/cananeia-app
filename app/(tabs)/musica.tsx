import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'

/**
 * Renders the MusicaScreen component.
 * @returns - The rendered MusicaScreen component.
 */
export default function MusicaScreen() {
  return (
    <View style={tw`flex-1 items-center justify-center bg-white p-8`}>
      <Text style={tw`text-center font-roboto_semi text-xl`}>
        {
          'Teremos músicas e partituras sincronizadas com o acervo espírita na versão 2.0!'
        }
      </Text>
    </View>
  )
}
