import tw from '@/lib/tailwind'
import { View, Text, ScrollView } from 'react-native'
import { Image } from 'expo-image'
import EmailLoginForm from '@/components/EmailLoginForm/EmailLoginForm'
import whoami from '@/api/user/whoami'
import { router } from 'expo-router'
import { useEffect } from 'react'

/**
 * A functional component representing the login screen of the application.
 * @returns JSX elements representing the login screen.
 */
export default function LoginScreen() {
  async function getUser() {
    const user = await whoami()
    if (user) {
      router.replace('/(tabs)')
    }
  }

  useEffect(() => {
    getUser()
  }, [])
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
    </ScrollView>
  )
}
