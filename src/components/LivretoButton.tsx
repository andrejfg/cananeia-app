import { View, Text, TouchableOpacity } from 'react-native'
import VectorIcon from './VectorIcon'
import tw from '@/lib/tailwind'

interface LivretoButtonProps {
  icon: React.ComponentProps<typeof VectorIcon>['name']
  name: string
}

export default function LivretoButton({ icon, name }: LivretoButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={tw`aspect-square w-[30%] rounded-lg bg-white shadow-lg`}
    >
      <View style={tw`flex-1 items-center justify-center`}>
        <VectorIcon color="black" size={34} name={icon} />
      </View>
      <View style={tw`items-center pb-3`}>
        <Text style={tw`text-xs`}>{name}</Text>
      </View>
    </TouchableOpacity>
  )
}
