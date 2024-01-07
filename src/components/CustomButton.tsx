import { Button } from 'react-native-paper'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import tw from '@/lib/tailwind'

interface CustomButtonProps extends TouchableOpacityProps {
  label?: string
  tipo?: string
}

/**
 * A custom button component that extends TouchableOpacityProps.
 * @param {CustomButtonProps} props - The props for the custom button component.
 * @returns A custom button component.
 */
export default function CustomButton({
  label,
  tipo = 'primary',
  ...props
}: CustomButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Button
        style={[
          tipo === 'primary' && tw`bg-primary`,
          tipo === 'cancel' && tw`bg-red-500`,
        ]}
        mode="elevated"
      >
        {label ? <Text style={tw`text-white`}>{label}</Text> : props.children}
      </Button>
    </TouchableOpacity>
  )
}
