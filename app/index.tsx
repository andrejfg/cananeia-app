import tw from '@/lib/tailwind'
import { View, Text, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import EmailLoginForm from '@/components/EmailLoginForm/EmailLoginForm'
import whoami from '@/api/user/whoami'
import { router } from 'expo-router'
import { useEffect } from 'react'
import { useAtom } from 'jotai'
import { typeUserAtom, userAtom } from '@/atoms/user'
// import { TextInput } from 'react-native-paper'

/**
 * A functional component representing the login screen of the application.
 * @returns JSX elements representing the login screen.
 */
export default function LoginScreen() {
  const [, setUser] = useAtom(userAtom)
  const [, setTypeUser] = useAtom(typeUserAtom)

  useEffect(() => {
    async function getUser() {
      const user = await whoami()
      if (user) {
        setUser(user)
        if (user.participante) {
          setTypeUser(0)
        } else if (user.polo) {
          setTypeUser(1)
        }
        router.replace('/(tabs)')
      }
    }
    getUser()
  }, [setTypeUser, setUser])

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`items-center py-8`}>
        <Text style={tw`text-center font-choice text-4xl`}>COMEERJ 2023</Text>
        <Image
          style={tw`h-64 w-64 `}
          contentFit="contain"
          source={require('@/assets/images/logo-comeerj.png')}
          alt="logo"
        />
      </View>

      <View style={tw`w-full items-center gap-2`}>
        <Text style={tw`text-center font-choice text-2xl`}>
          Compartilhe seus momentos!
        </Text>
        <EmailLoginForm />
      </View>

      {/* <TextInput
        placeholder="ip do servidor"
        value={ipDoServidor}
        mode="outlined"
        style={tw`m-10`}
        onChange={(e) => {
          setIpDoServidor(e.nativeEvent.text)
        }}
      /> */}
    </ScrollView>
  )
}
