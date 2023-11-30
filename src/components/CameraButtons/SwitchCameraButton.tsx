import { TouchableOpacity } from 'react-native'
import VectorIcon from '../VectorIcon'

interface SwitchCameraProps {
  onPress: () => void
}

export default function SwitchCamera({ onPress }: SwitchCameraProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <VectorIcon name="flip-camera-android" color="white" size={28} />
    </TouchableOpacity>
  )
}
