import tw from '@/lib/tailwind'
import { View, Text } from 'react-native'
import CustomButton from './CustomButton'
import VectorIcon from './VectorIcon'

type HeaderMemoriaProps = {
  handleAdicionar: () => void
}

export default function HeaderMemoria({ handleAdicionar }: HeaderMemoriaProps) {
  return (
    <View
      style={tw`w-full flex-row justify-between border-b-[0.5px] border-b-gray-300 bg-white p-3`}
    >
      <Text style={tw`font-choice text-2xl`}>Nova memória</Text>
      <CustomButton onPress={handleAdicionar}>
        <VectorIcon color="white" size={16} name="plus" />
      </CustomButton>
    </View>
  )
}
