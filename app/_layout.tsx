import FontAwesome from '@expo/vector-icons/FontAwesome'
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'
import { SplashScreen, Stack } from 'expo-router'
import { useEffect } from 'react'
import {
  PaperProvider,
  configureFonts,
  MD3LightTheme,
} from 'react-native-paper'
import { SafeAreaView } from 'react-native-safe-area-context'
import tw from '@/lib/tailwind'
import { RootSiblingParent } from 'react-native-root-siblings'

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from 'expo-router'

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require('@/assets/fonts/SpaceMono-Regular.ttf'),
    BetweenChoice: require('@/assets/fonts/BetweenChoice.otf'),
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    ...FontAwesome.font,
  })

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error
  }, [error])

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync()
    }
  }, [loaded])

  if (!loaded) {
    return null
  }

  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <RootSiblingParent>
      <SafeAreaView style={tw`flex-1 bg-white`}>
        <PaperProvider
          theme={{
            ...MD3LightTheme,
            version: 3,
            fonts: configureFonts({
              isV3: true,
              config: {
                default: {
                  fontFamily: 'Roboto_400Regular',
                  fontWeight: '400',
                  letterSpacing: 0,
                  lineHeight: 24,
                  fontSize: 16,
                },
              },
            }),
          }}
        >
          <Stack>
            <Stack.Screen
              name="index"
              // redirect
              options={{ headerShown: false }}
            />
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          </Stack>
        </PaperProvider>
      </SafeAreaView>
    </RootSiblingParent>
  )
}
