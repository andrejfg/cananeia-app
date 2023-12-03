import { Button } from 'react-native-paper'
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import tw from '@/lib/tailwind'

interface CustomButtonProps extends TouchableOpacityProps {
  label?: string
}

/**
 * A custom button component that extends TouchableOpacityProps.
 * @param {CustomButtonProps} props - The props for the custom button component.
 * @returns A custom button component.
 */
export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return (
    <TouchableOpacity {...props}>
      <Button style={tw`bg-primary`} mode="elevated">
        {label ? <Text style={tw`text-white`}>{label}</Text> : props.children}
      </Button>
    </TouchableOpacity>
  )
}
