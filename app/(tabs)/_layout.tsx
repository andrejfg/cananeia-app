import { Tabs } from 'expo-router'
import React from 'react'
import { Image } from 'expo-image'
import tw from '@/lib/tailwind'
import blurhash from '@/constraints/blurhash'
import VectorIcon from '@/components/VectorIcon'

export default function TabLayout() {
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
          tabBarIcon: ({ focused }) => (
            <Image
              style={[
                tw`aspect-square h-8 rounded-full`,
                focused && tw`border-[2.5px] border-black`,
              ]}
              source={require('@/assets/images/exemploPerfil.jpg')}
              placeholder={blurhash}
              alt="Imagem de Perfil"
            />
          ),
        }}
      />
    </Tabs>
  )
}
