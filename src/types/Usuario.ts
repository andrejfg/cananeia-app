import Imagem from './Imagem'
import Participante from './Participante'
import Polo from './Polo'

type Usuario = {
  id?: string
  usuario?: string
  participante?: Participante
  polo?: Polo
  perfilImagem?: Imagem
}

export default Usuario
