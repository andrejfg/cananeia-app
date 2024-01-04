import { api } from '../api'
import CookieManager from '@react-native-cookies/cookies'

export default async function signout() {
  await api.post('/login/signout/')
  await CookieManager.clearAll()
}
