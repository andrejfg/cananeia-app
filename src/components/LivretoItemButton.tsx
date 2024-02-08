import { View, Text, TouchableOpacity } from 'react-native'
import VectorIcon from './VectorIcon'
import { LinearGradient } from 'expo-linear-gradient'
import tw from '@/lib/tailwind'

interface LivretoItemButtonProps {
  icon: React.ComponentProps<typeof VectorIcon>['name']
  name: string
  direcao: 'left' | 'right'
  color: string
}

export default function LivretoItemButton({
  icon,
  name,
  direcao,
  color,
}: LivretoItemButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[tw`h-27 w-full rounded-lg bg-white shadow-lg`]}
    >
      <LinearGradient
        colors={['transparent', color]}
        start={direcao === 'left' ? { x: 0, y: 1 } : { x: 1, y: 0 }}
        end={direcao === 'left' ? { x: 0.7, y: 0 } : { x: 0.3, y: 1 }}
        style={[
          tw`flex-1 items-center justify-center rounded-lg px-8`,
          direcao === 'left' ? tw`items-start` : tw`items-end`,
        ]}
      >
        <View style={tw`items-center`}>
          <VectorIcon color="rgb(30, 41, 59)" size={34} name={icon} />
          <View style={tw`items-center pb-3`}>
            <Text style={tw`font-roboto text-xs text-slate-700`}>{name}</Text>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  )
}
