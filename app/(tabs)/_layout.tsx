import { Tabs } from 'expo-router'
import { Image } from 'expo-image'
import tw from '@/lib/tailwind'
import VectorIcon from '@/components/VectorIcon'
import imageUrl from '@/utils/imageUrl'
import GetUsuario from '@/utils/getUsuario'

export default function TabLayout() {
  const user = GetUsuario()
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'black',
        tabBarShowLabel: false,
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          unmountOnBlur: true,
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <VectorIcon
              size={28}
              name={focused ? 'home' : 'home-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="livreto"
        options={{
          title: 'Livreto',
          freezeOnBlur: true,
          tabBarIcon: ({ color, focused }) => (
            <VectorIcon
              size={28}
              name={focused ? 'book' : 'book-outline'}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="novaMemoria"
        options={{
          title: 'Novo',
          unmountOnBlur: true,
          tabBarIcon: ({ color }) => (
            <VectorIcon size={28} name="plus-square" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="musica"
        options={{
          title: 'Músicas',
          freezeOnBlur: true,
          tabBarIcon: ({ color }) => (
            <VectorIcon size={28} name="music" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                tw`aspect-square h-8 rounded-full`,
                focused && tw`border-[2.5px] border-black`,
              ]}
              source={user && imageUrl(user.perfilImagem?.nome)}
              placeholder={user && user.perfilImagem?.hash}
              alt="Imagem de Perfil"
            />
          ),
        }}
      />
    </Tabs>
  )
}
