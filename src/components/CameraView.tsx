import { View, Text, TouchableOpacity } from 'react-native'
import tw from '@/lib/tailwind'
import React, { useEffect, useState } from 'react'
import { Image } from 'expo-image'
import * as ImagePicker from 'expo-image-picker'
import { Camera } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'
import blurhash from '@/constraints/blurhash'
import VectorIcon from './VectorIcon'

type CameraViewProps = {
  setPhoto: React.Dispatch<
    React.SetStateAction<ImagePicker.ImagePickerAsset | null>
  >
  photo: ImagePicker.ImagePickerAsset | null
  proporcao: '1/1' | '4/5'
  setProporcao: React.Dispatch<React.SetStateAction<'1/1' | '4/5'>>
}

export default function CameraView({
  photo,
  setPhoto,
  proporcao,
  setProporcao,
}: CameraViewProps) {
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [hasMediaLibrary, setHasMediaLibraryPermission] = useState(false)

  useEffect(() => {
    async function getPermission() {
      const actualCameraPermission = await Camera.getCameraPermissionsAsync()

      if (actualCameraPermission.status !== 'granted') {
        const cameraPermission = await Camera.requestCameraPermissionsAsync()
        setHasCameraPermission(cameraPermission.status === 'granted')
      } else {
        setHasCameraPermission(true)
      }

      const actualMediaPermission = await MediaLibrary.getPermissionsAsync()
      if (actualMediaPermission.status !== 'granted') {
        const mediaLibraryPermission =
          await MediaLibrary.requestPermissionsAsync()
        setHasMediaLibraryPermission(
          mediaLibraryPermission.status === 'granted',
        )
      } else {
        setHasMediaLibraryPermission(true)
      }
    }

    getPermission()
  }, [])

  const options = {
    quality: 0.7,
    allowsEditing: true,
    aspect: proporcao === '1/1' ? [1, 1] : [4, 5],
    mediaTypes: ImagePicker.MediaTypeOptions.Images,
  } as ImagePicker.ImagePickerOptions

  async function handleTakePhoto() {
    const photo = await ImagePicker.launchCameraAsync(options)
    if (photo.assets && photo.assets[0]) setPhoto(photo.assets[0])
  }
  async function handleGetPhoto() {
    const photo = await ImagePicker.launchImageLibraryAsync(options)
    if (photo.assets && photo.assets[0]) setPhoto(photo.assets[0])
  }

  if (!hasCameraPermission)
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>Permissão de camera é necessária</Text>
      </View>
    )
  if (!hasMediaLibrary)
    return (
      <View style={tw`flex-1 items-center justify-center`}>
        <Text>Permissão de arquivos é necessária</Text>
      </View>
    )

  return (
    <View style={tw`flex-1 gap-4`}>
      <View style={tw`items-center gap-4`}>
        <Text style={tw`pt-4 text-lg font-semibold`}>Proporção</Text>
        <View style={tw`flex-row gap-16`}>
          <TouchableOpacity
            onPress={() => {
              setProporcao('1/1')
            }}
            style={[
              tw`h-14 w-14 items-center justify-center rounded-md border-2`,
              proporcao === '1/1' ? tw`border-black` : tw`border-gray-300`,
            ]}
          >
            <Text
              style={[
                tw`text-base font-semibold`,
                proporcao === '1/1' ? tw`text-black` : tw`text-gray-400`,
              ]}
            >
              1/1
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setProporcao('4/5')
            }}
            style={[
              tw`h-14 w-[70px] items-center justify-center rounded-md border-2`,
              proporcao === '4/5' ? tw`border-black` : tw`border-gray-300`,
            ]}
          >
            <Text
              style={[
                tw`text-base font-semibold`,
                proporcao === '4/5' ? tw`text-black` : tw`text-gray-400`,
              ]}
            >
              4/5
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={[tw`m-2 gap-2 rounded-md border border-gray-300 p-2`]}>
        <Image
          style={[tw`w-full`, { aspectRatio: proporcao }]}
          alt="teste"
          source={photo}
          placeholder={blurhash}
        />
        <View style={tw`flex-row justify-around`}>
          <TouchableOpacity
            style={tw`items-center justify-center`}
            onPress={handleTakePhoto}
          >
            <VectorIcon color="grey" name="camera-outline" size={24} />
          </TouchableOpacity>
          <TouchableOpacity
            style={tw`items-center justify-center`}
            onPress={handleGetPhoto}
          >
            <VectorIcon color="grey" name="add-photo-alternate" size={30} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}
