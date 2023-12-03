import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'

interface HeaderProfileProps {
  nick: string
}

/**
 * Represents the header component for a user profile.
 * @param {HeaderProfileProps} props - The props for the header component.
 * @param {string} props.nick - The nickname of the user.
 * @returns The rendered header component.
 */
export default function HeaderProfile({ nick }: HeaderProfileProps) {
  return (
    <View style={tw`w-full border-b-[0.5px] border-b-gray-300 bg-white p-4`}>
      <Text style={tw`font-roboto_bold text-xl`}>{nick}</Text>
    </View>
  )
}
