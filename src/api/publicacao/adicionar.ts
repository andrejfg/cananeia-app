import { ImagePickerAsset } from 'expo-image-picker'
import { api } from '../api'
import FeedItemType from '@/types/FeedItem'

type adicionarPublicacaoProps = {
  image: ImagePickerAsset
  tipo: string
  proporcao: string
  descricao: string
}

export default async function adicionarPublicacao(
  data: adicionarPublicacaoProps,
): Promise<FeedItemType | null> {
  const form = new FormData()
  form.append('tipo', data.tipo)
  form.append('proporcao', data.proporcao)
  form.append('descricao', data.descricao)
  form.append('image', {
    uri: data.image.uri,
    name: data.image.uri.split('/').at(-1),
    type: 'image/' + data.image.uri.split('.').at(-1),
  } as any)

  return await api
    .post('/publicacao', form, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(function (response) {
      return response.data as FeedItemType
    })
    .catch(function () {
      return null
    })
}
