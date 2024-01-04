import Imagem from './Imagem'
import Participante from './Participante'
import Polo from './Polo'

type FeedItemType = {
  id: string
  descricao: string
  aceito: boolean
  createdAt: Date
  updateAt: Date
  acceptedAt: Date
  participante: Participante
  polo: Polo
  imagem: Imagem
}

export default FeedItemType
