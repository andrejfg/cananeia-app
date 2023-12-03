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

/**
 * Represents a FlashButton component that allows the user to toggle the flash on/off.
 * @param {FlashButtonProps} props - The props for the FlashButton component.
 * @param {boolean} props.active - Indicates whether the flash is currently active.
 * @param {() => void} props.onPress - The function to be called when the button is pressed.
 * @param {CameraType} props.type - The type of camera being used.
 * @returns A React component that renders a button to toggle the flash on/off.
 */
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
