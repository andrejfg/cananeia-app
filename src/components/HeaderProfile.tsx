import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import signout from '@/api/login/signout'
import { router } from 'expo-router'

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
  async function handleLogout() {
    await signout()
    router.replace('/')
  }
  return (
    <View
      style={tw`w-full flex-row items-center  justify-between  border-b-[0.5px] border-b-gray-300 bg-white p-4`}
    >
      <Text style={tw`font-roboto_bold text-xl`}>{nick}</Text>
      <CustomButton
        onPress={handleLogout}
        style={tw`rounded-full `}
        label="Sair"
      />
    </View>
  )
}
