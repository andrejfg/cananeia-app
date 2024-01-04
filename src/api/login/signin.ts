import { api } from '../api'
import FormData from 'form-data'
import whoami from '../user/whoami'

type signinProps = {
  usuario: string
  senha: string
}

export default async function signin({ usuario, senha }: signinProps) {
  const data = new FormData()
  data.append('usuario', usuario)
  data.append('senha', senha)

  const teste = await api
    .post('/login/signin/', { usuario, senha })
    .then(function (response) {
      return response.status
    })
    .catch(function (error) {
      return error.code
    })
  if (teste === 200) {
    return await whoami()
  }
}
