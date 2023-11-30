import { Alert, View } from 'react-native'
import tw from '@/lib/tailwind'
import { useEffect, useState } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import FlashButton from '@/components/CameraButtons/FlashButton'
import SwitchCameraButton from '@/components/CameraButtons/SwitchCameraButton'
import ShootButton from '@/components/CameraButtons/ShootButton'

export default function NovaMemoriaScreen() {
  const [type, setType] = useState(CameraType.back)
  const [startCamera, setStartCamera] = useState(false)
  const [flashState, setFlashState] = useState(false)
  const [permission, requestPermission] = Camera.useCameraPermissions()
  let camera: Camera

  if (!permission) {
    requestPermission()
  }

  if (permission && !permission.granted) {
    requestPermission()
  }

  useEffect(() => {
    async function getPermission() {
      const { status } = await requestPermission()
      if (status === 'granted') {
        setStartCamera(true)
      } else {
        Alert.alert('Access denied')
      }
    }
    getPermission()
    setType(CameraType.front)
  }, [requestPermission])

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    )
  }

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
      {startCamera && (
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
      )}
    </View>
  )
}
