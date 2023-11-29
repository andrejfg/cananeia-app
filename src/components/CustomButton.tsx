import { Button } from 'react-native-paper'
import { Text } from 'react-native'
import tw from '@/lib/tailwind'

interface CustomButtonProps
  extends Omit<React.ComponentProps<typeof Button>, 'children'> {
  label: string
}

export default function CustomButton({ label, ...props }: CustomButtonProps) {
  return (
    <Button {...props} style={tw`bg-primary`} mode="elevated">
      <Text style={tw`text-white`}>{label}</Text>
    </Button>
  )
}
