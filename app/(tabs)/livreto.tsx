import { ScrollView, View } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import LivretoItemButton from '@/components/LivretoItemButton'

/**
 * Renders the LivretoScreen component.
 * @returns - The rendered LivretoScreen component.
 */
export default function LivretoScreen() {
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`items-start gap-4 p-8`}>
        <LivretoItemButton
          name="Leituras"
          icon="book-open"
          direcao="left"
          color="rgba(rgba(255, 1, 0,0.5))"
        />
        <LivretoItemButton
          name="Mapa"
          icon="map"
          direcao="right"
          color="rgba(255, 128, 0,0.5)"
        />
        <LivretoItemButton
          name="Cronograma"
          icon="clock"
          direcao="left"
          color="rgba(252, 238, 33,0.5)"
        />
        <LivretoItemButton
          name="Cardápio"
          icon="food-apple-outline"
          direcao="right"
          color="rgba(57, 181, 73,0.5)"
        />
        <LivretoItemButton
          name="Regras"
          icon="eye"
          direcao="left"
          color="rgba(41, 171, 227,0.5)"
        />
      </View>
    </ScrollView>
  )
}
