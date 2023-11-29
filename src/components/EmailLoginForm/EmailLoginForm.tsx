import tw from '@/lib/tailwind'
import { View } from 'react-native'
import { Text, Checkbox } from 'react-native-paper'
import TextInputForm from '../TextInputForm'
import React, { useState } from 'react'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { emailLoginSchemaType, emailLoginSchema } from './loginSchema'
import { router } from 'expo-router'
import CustomButton from '../CustomButton'

export default function EmailLoginForm() {
  const methods = useForm<emailLoginSchemaType>({
    resolver: zodResolver(emailLoginSchema),
    defaultValues: {
      email: '',
      senha: '',
    },
  })

  const [lembrar, setLembrar] = useState<boolean>(false)

  const onSubmit: SubmitHandler<emailLoginSchemaType> = async (data) => {
    console.log(data)
    router.replace('/(tabs)')
  }

  return (
    <View style={tw`w-full gap-8 px-10`}>
      <FormProvider {...methods}>
        <TextInputForm
          style={tw`border-textInput`}
          placeholder="Email"
          textContentType="emailAddress"
          name="email"
        />
        <TextInputForm
          style={tw`border-textInput`}
          placeholder="Senha"
          textContentType="password"
          name="senha"
        />
        <View style={tw`flex-row justify-between`}>
          <View style={tw`flex-row items-center`}>
            <Checkbox
              status={lembrar ? 'checked' : 'unchecked'}
              onPress={() => setLembrar(!lembrar)}
              color="#0fb2d1"
            />
            <Text style={tw`text-xs`}>Lembrar minha senha</Text>
          </View>
          <View style={tw`justify-center`}>
            <Text style={tw`border-b border-link text-xs text-link`}>
              Recuperar senha
            </Text>
          </View>
        </View>
        <View style={tw`items-center`}>
          <CustomButton
            label="ENTRAR"
            onPress={methods.handleSubmit(onSubmit)}
          />
        </View>
      </FormProvider>
    </View>
  )
}
