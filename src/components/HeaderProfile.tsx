import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import signout from '@/api/login/signout'
import { router } from 'expo-router'
import { typeUserAtom, userAtom } from '@/atoms/user'
import { useAtom } from 'jotai'

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
  const [type, setType] = useAtom(typeUserAtom)
  const [user] = useAtom(userAtom)
  async function handleLogout() {
    await signout()
    router.replace('/')
  }

  function toggleUserType() {
    setType((prev) => (prev === 0 ? 1 : 0))
    router.replace('/(tabs)/')
  }

  return (
    <View
      style={tw`w-full flex-row items-center  justify-between  border-b-[0.5px] border-b-gray-300 bg-white p-4`}
    >
      <Text style={tw`font-roboto_bold text-xl`}>{nick}</Text>
      <View style={tw`flex-row gap-4`}>
        {user && user.participante?.comissao && (
          <CustomButton
            onPress={toggleUserType}
            style={tw`rounded-full`}
            label={type === 0 ? 'Polo' : 'Participante'}
          />
        )}
        <CustomButton
          onPress={handleLogout}
          tipo="cancel"
          style={tw`rounded-full `}
          label="Sair"
        />
      </View>
    </View>
  )
}
