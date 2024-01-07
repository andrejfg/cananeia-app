import CameraView from '@/components/CameraView'
import HeaderMemoria from '@/components/HeaderMemoria'
import { ImagePickerAsset } from 'expo-image-picker'
import tw from '@/lib/tailwind'
import { useState } from 'react'
import { View, Text, ScrollView } from 'react-native'
import { TextInput } from 'react-native-paper'
import adicionarPublicacao from '@/api/publicacao/adicionar'
import Toast from 'react-native-root-toast'
import GetUsuario from '@/utils/getUsuario'
import { router } from 'expo-router'

/**
 * The NovaMemoriaScreen component displays a camera view and allows the user to take pictures.
 * It uses the Camera component from the Expo Camera library to access the device's camera.
 * The component manages the camera type, flash state, and camera permissions.
 * @returns A React component that renders a camera view.
 */
export default function NovaMemoriaScreen() {
  const [photo, setPhoto] = useState<ImagePickerAsset | null>(null)
  const [proporcao, setProporcao] = useState<'1/1' | '4/5'>('1/1')
  const [legenda, setLegenda] = useState<string>('')
  const user = GetUsuario()

  async function handleAdicionar() {
    if (!photo) {
      Toast.show('Deve possuir uma foto!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.SHORT,
      })
      return
    }
    if (!user) {
      Toast.show('Falha ao associar usuário!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.SHORT,
      })
      return
    }
    const publicacao = await adicionarPublicacao({
      descricao: legenda,
      image: photo,
      proporcao,
      tipo: user.tipo + '',
    })

    if (publicacao) {
      Toast.show('Adicionado com sucesso!', {
        position: 0,
        backgroundColor: '#368cd7a6',
        textColor: 'white',
        duration: Toast.durations.SHORT,
      })
    } else {
      Toast.show('Erro!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.SHORT,
      })
    }
    router.replace('/(tabs)/')
  }

  return (
    <View style={tw`flex-1 bg-white`}>
      <HeaderMemoria handleAdicionar={handleAdicionar} />
      <ScrollView>
        <View>
          <CameraView
            photo={photo}
            setPhoto={setPhoto}
            proporcao={proporcao}
            setProporcao={setProporcao}
          />
          <View style={tw`gap-4 p-4`}>
            <Text style={tw`text-base font-semibold`}>Legenda:</Text>
            <TextInput
              value={legenda}
              onChange={(e) => {
                setLegenda(e.nativeEvent.text)
              }}
              multiline
              mode="outlined"
              activeOutlineColor="black"
              style={tw`py-4`}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  )
  // return <View />
}
