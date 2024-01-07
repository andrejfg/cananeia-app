import tw from '@/lib/tailwind'
import { View, TouchableOpacity, Text } from 'react-native'
import { Portal, Divider, Button, Modal } from 'react-native-paper'

type FeedModalProps = {
  optionVisible: boolean
  toogleOptionsVisibility: () => void
  isAprovados: boolean
  deleteItem: () => void
  acceptItem: () => void
}

export default function FeedModal({
  optionVisible,
  toogleOptionsVisibility,
  isAprovados,
  deleteItem,
  acceptItem,
}: FeedModalProps) {
  return (
    <Portal>
      <Modal
        dismissable
        visible={optionVisible}
        onDismiss={toogleOptionsVisibility}
        style={tw`flex-1 justify-end p-4`}
      >
        <View style={tw`rounded-md bg-white`}>
          {!isAprovados && (
            <>
              <TouchableOpacity activeOpacity={0.7} onPress={acceptItem}>
                <Button theme={{ roundness: 0 }} style={[tw`py-2`]}>
                  <Text style={tw`text-blue-500`}>Aprovar</Text>
                </Button>
              </TouchableOpacity>
              <Divider />
            </>
          )}
          <TouchableOpacity activeOpacity={0.7} onPress={deleteItem}>
            <Button theme={{ roundness: 0 }} style={[tw`py-2`]}>
              <Text style={tw`text-red-500`}>Deletar</Text>
            </Button>
          </TouchableOpacity>
        </View>
      </Modal>
    </Portal>
  )
}
