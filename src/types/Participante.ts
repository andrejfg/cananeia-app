import Polo from './Polo'
import Usuario from './Usuario'

type Participante = {
  id: string
  nome: string
  comissao: boolean
  usuario?: Usuario
  polo?: Polo
}

export default Participante
