import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import VectorIcon from '../VectorIcon'

type SwitchCameraProps = TouchableOpacityProps

/**
 * A component that renders a switch camera button.
 * @param {TouchableOpacityProps} props - The props for the TouchableOpacity component.
 * @returns The rendered switch camera button.
 */
export default function SwitchCamera(props: SwitchCameraProps) {
  return (
    <TouchableOpacity {...props}>
      <VectorIcon name="flip-camera-android" color="white" size={28} />
    </TouchableOpacity>
  )
}
