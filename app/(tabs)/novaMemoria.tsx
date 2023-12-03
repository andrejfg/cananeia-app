import { Alert, View } from 'react-native'
import tw from '@/lib/tailwind'
import { useEffect, useState } from 'react'
import { Camera, CameraType, FlashMode } from 'expo-camera'
import FlashButton from '@/components/CameraButtons/FlashButton'
import SwitchCameraButton from '@/components/CameraButtons/SwitchCameraButton'
import ShootButton from '@/components/CameraButtons/ShootButton'

/**
 * The NovaMemoriaScreen component displays a camera view and allows the user to take pictures.
 * It uses the Camera component from the Expo Camera library to access the device's camera.
 * The component manages the camera type, flash state, and camera permissions.
 * @returns A React component that renders a camera view.
 */
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
    /**
     * Asynchronously requests permission to access the camera and sets the state of
     * `startCamera` based on the permission status.
     * @returns None
     */
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
