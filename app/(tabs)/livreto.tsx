import { View } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import LivretoItemButton from '@/components/LivretoItemButton'

/**
 * Renders the LivretoScreen component.
 * @returns - The rendered LivretoScreen component.
 */
export default function LivretoScreen() {
  return (
    <View style={tw`flex-1 flex-row flex-wrap items-start gap-4 bg-white p-8`}>
      <LivretoItemButton name="Leituras" icon="book-open" />
      <LivretoItemButton name="Mapa" icon="map" />
      <LivretoItemButton name="Programação" icon="clock" />
      <LivretoItemButton name="Cardápio" icon="food-apple-outline" />
      <LivretoItemButton name="Regras" icon="eye" />
    </View>
  )
}
