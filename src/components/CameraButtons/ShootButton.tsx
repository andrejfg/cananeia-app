import tw from '@/lib/tailwind'
import React from 'react'
import { View, TouchableOpacity } from 'react-native'

interface ShootButtonProps {
  onPress: () => void
}

export default function ShootButton({ onPress }: ShootButtonProps) {
  return (
    <View style={tw`rounded-full border-4 border-white p-1`}>
      <TouchableOpacity
        onPress={onPress}
        style={tw`rounded-full bg-white p-8`}
      />
    </View>
  )
}
