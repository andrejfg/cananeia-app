import Icon from '@expo/vector-icons/Ionicons'
import { TouchableOpacity } from 'react-native'

export default function CommentButton() {
  function onPressComment() {
    // TODO: abrir tela de comentarios
  }
  return (
    <TouchableOpacity onPress={onPressComment}>
      <Icon size={30} name={'chatbubble-outline'} color={'#a6a6a6'} />
    </TouchableOpacity>
  )
}
