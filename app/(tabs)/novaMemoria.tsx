import CameraView from '@/components/CameraView'
import { View } from 'react-native'

/**
 * The NovaMemoriaScreen component displays a camera view and allows the user to take pictures.
 * It uses the Camera component from the Expo Camera library to access the device's camera.
 * The component manages the camera type, flash state, and camera permissions.
 * @returns A React component that renders a camera view.
 */
export default function NovaMemoriaScreen() {
  return <CameraView />
  // return <View />
}
