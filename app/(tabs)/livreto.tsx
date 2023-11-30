import { View } from 'react-native'
import tw from '@/lib/tailwind'
import React from 'react'
import LivretoButton from '@/components/LivretoButton'

export default function LivretoScreen() {
  return (
    <View style={tw`flex-1 flex-row flex-wrap items-start gap-4 bg-white p-8`}>
      <LivretoButton name="Leituras" icon="book-open" />
      <LivretoButton name="Mapa" icon="map" />
      <LivretoButton name="Programação" icon="clock" />
      <LivretoButton name="Cardápio" icon="food-apple-outline" />
      <LivretoButton name="Regras" icon="eye" />
    </View>
  )
}
