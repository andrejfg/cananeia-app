import { userAtom, typeUserAtom } from '@/atoms/user'
import { useAtom } from 'jotai'

export default function GetUsuario() {
  const [user] = useAtom(userAtom)
  const [userType] = useAtom(typeUserAtom)

  if (!user) {
    return null
  }

  return userType === 0
    ? { ...user, tipo: userType }
    : user.polo?.usuario && userType === 1
    ? { ...user.polo.usuario, tipo: userType }
    : { ...user, tipo: userType }
}
