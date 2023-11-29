import { TouchableOpacity } from 'react-native'
import Icon from '@expo/vector-icons/AntDesign'
import { useState } from 'react'

export default function LikeButton() {
  const [loved, setLoved] = useState<boolean>(false)

  function onPressLike() {
    setLoved(!loved)
  }
  return (
    <TouchableOpacity onPress={onPressLike}>
      <Icon
        size={30}
        name={loved ? 'heart' : 'hearto'}
        color={loved ? 'red' : '#a6a6a6'}
      />
    </TouchableOpacity>
  )
}
