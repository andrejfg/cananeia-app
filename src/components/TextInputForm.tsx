import React from 'react'
import { View } from 'react-native'
import { useFormContext, Controller } from 'react-hook-form'
import { TextInput, Text, TextInputProps } from 'react-native-paper'
import tw from '@/lib/tailwind'

interface TextInputForm extends TextInputProps {
  name: string
}

export default function TextInputForm(props: TextInputForm) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => (
          <TextInput
            {...props}
            onChangeText={field.onChange}
            onBlur={field.onBlur}
            value={field.value}
            cursorColor={'#1976f0'}
            activeOutlineColor="#0fb2d1"
            mode="outlined"
            style={[
              props.style,
              { textAlignVertical: props.multiline ? 'top' : 'center' },
            ]}
          />
        )}
        name={props.name}
        rules={{ required: errors.root?.message }}
      />
      {errors[props.name] && (
        <Text style={tw`pl-1 text-sm text-[#F53131]`}>
          {errors[props.name]?.message as string}
        </Text>
      )}
    </View>
  )
}
