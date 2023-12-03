import tw from '@/lib/tailwind'
import React from 'react'
import { View, TouchableOpacity, TouchableOpacityProps } from 'react-native'

type ShootButtonProps = TouchableOpacityProps

/**
 * A custom button component that renders a shoot button.
 * @param {TouchableOpacityProps} props - The props for the TouchableOpacity component.
 * @returns The rendered ShootButton component.
 */
export default function ShootButton(props: ShootButtonProps) {
  return (
    <View style={tw`rounded-full border-4 border-white p-1`}>
      <TouchableOpacity {...props} style={tw`rounded-full bg-white p-8`} />
    </View>
  )
}
