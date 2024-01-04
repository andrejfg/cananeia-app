import { View, Text } from 'react-native'
import tw from '@/lib/tailwind'
import { useEffect, useState } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import * as MediaLibrary from 'expo-media-library'

import FlashButton from '@/components/CameraButtons/FlashButton'
import SwitchCameraButton from '@/components/CameraButtons/SwitchCameraButton'
import ShootButton from '@/components/CameraButtons/ShootButton'

export default function CameraView() {
  const [type, setType] = useState(CameraType.back)
  const [flashState, setFlashState] = useState(false)
  const [hasCameraPermission, setHasCameraPermission] = useState(false)
  const [hasMediaLibrary, setHasMediaLibraryPermission] = useState(false)
  const startCamera = hasCameraPermission && hasMediaLibrary
  let camera: Camera

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
    setType(CameraType.front)
  }, [])

  /**
   * Toggles the camera type between front and back.
   * @returns None
   */
  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    )
  }

  /**
   * Toggles the flash state between true and false.
   * @returns None
   */
  function toggleFlashState() {
    setFlashState((current) => !current)
  }

  async function takePicture() {
    if (!camera) return
    const photo = await camera.takePictureAsync()
    // TODO: FAZER ALGO COM A FOTO
  }

  return (
    <View style={tw`flex-1 bg-black`}>
      {startCamera ? (
        <Camera
          flashMode={flashState ? FlashMode.on : FlashMode.off}
          ref={(r) => {
            if (r) {
              camera = r
            }
          }}
          ratio="16:9"
          style={tw`w-full flex-1 flex-row items-end pb-8`}
          type={type}
        >
          <View style={tw`w-full flex-row items-center justify-around`}>
            <SwitchCameraButton onPress={toggleCameraType} />
            <ShootButton onPress={takePicture} />
            <FlashButton
              type={type}
              onPress={toggleFlashState}
              active={flashState}
            />
          </View>
        </Camera>
      ) : (
        <View style={tw`w-full flex-1 items-center justify-center`}>
          {hasCameraPermission && <Text>Permissão de camera é necessária</Text>}
          {hasMediaLibrary && <Text>Permissão de arquivos é necessária</Text>}
        </View>
      )}
    </View>
  )
}
