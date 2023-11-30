import { TouchableOpacity, View } from 'react-native'
import { CameraType } from 'expo-camera'
import tw from '@/lib/tailwind'
import VectorIcon from '../VectorIcon'
import React from 'react'

interface FlashButtonProps {
  active: boolean
  onPress: () => void
  type: CameraType
}

export default function FlashButton({
  type,
  active,
  onPress,
}: FlashButtonProps) {
  return (
    <View style={type === CameraType.front && tw`w-7`}>
      <View style={type === CameraType.front && tw`hidden`}>
        <TouchableOpacity onPress={onPress}>
          <VectorIcon
            name={active ? 'flash-on' : 'flash-off'}
            color="white"
            size={28}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}
