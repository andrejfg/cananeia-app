import tw from '@/lib/tailwind'
import { TouchableOpacity, View } from 'react-native'
import { Text, Checkbox } from 'react-native-paper'
import TextInputForm from '../TextInputForm'
import Toast from 'react-native-root-toast'
import { useEffect, useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailLoginSchemaType, emailLoginSchema } from './loginSchema'
import CustomButton from '../CustomButton'
import signin from '@/api/login/signin'
import * as SecureStore from 'expo-secure-store'
import { router } from 'expo-router'
import { useAtom } from 'jotai'
import { typeUserAtom, userAtom } from '@/atoms/user'

/**
 * A functional component that renders an email login form.
 * @returns JSX element representing the email login form.
 */
export default function EmailLoginForm() {
  const methods = useForm<emailLoginSchemaType>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      usuario: '',
      senha: '',
    },
  })

  useEffect(() => {
    async function usuarioESenhaSalvos() {
      const usuario = await SecureStore.getItemAsync('usuario').catch(
        () => null,
      )
      methods.setValue('usuario', usuario || '')
      const senha = await SecureStore.getItemAsync('senha').catch(() => null)
      methods.setValue('senha', senha || '')
      if (usuario && senha) {
        setLembrar(true)
      }
    }

    usuarioESenhaSalvos()
  }, [methods])

  const [lembrar, setLembrar] = useState<boolean>(false)
  const [, setUser] = useAtom(userAtom)
  const [, setTypeUser] = useAtom(typeUserAtom)

  const onSubmit: SubmitHandler<emailLoginSchemaType> = async (data) => {
    const usuario = await signin(data)
    if (usuario) {
      setUser(usuario)
      if (usuario.participante) {
        setTypeUser(0)
      } else if (usuario.polo) {
        setTypeUser(1)
      }

      SecureStore.setItemAsync('usuario', lembrar ? data.usuario : '')
      SecureStore.setItemAsync('senha', lembrar ? data.senha : '')

      router.replace('/(tabs)')
    } else {
      Toast.show('Usuário e/ou senha não correspondem!', {
        position: 0,
        backgroundColor: 'red',
        duration: Toast.durations.LONG,
      })
    }
  }

  return (
    <View style={tw`w-full gap-8 px-10`}>
      <FormProvider {...methods}>
        <TextInputForm
          placeholder="Usuário"
          inputMode="email"
          autoComplete="email"
          name="usuario"
        />
        <TextInputForm placeholder="Senha" secureTextEntry name="senha" />
        <View style={tw`flex-row justify-between`}>
          <TouchableOpacity
            activeOpacity={1}
            style={tw`flex-row items-center`}
            onPress={() => setLembrar(!lembrar)}
          >
            <Checkbox
              status={lembrar ? 'checked' : 'unchecked'}
              color="#0fb2d1"
            />
            <Text style={tw`text-xs`}>Lembrar minha senha</Text>
          </TouchableOpacity>
          {/* <View style={tw`justify-center`}>
            <Text style={tw`border-b border-link text-xs text-link`}>
              Recuperar senha
            </Text>
          </View> */}
        </View>
        <View style={tw`items-center py-2`}>
          <CustomButton
            label="ENTRAR"
            onPress={methods.handleSubmit(onSubmit)}
          />
        </View>
      </FormProvider>
    </View>
  )
}
