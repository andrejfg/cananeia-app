import React, { useState } from 'react'
import { TouchableOpacity, View } from 'react-native'
import { useFormContext, Controller } from 'react-hook-form'
import { TextInput, Text, TextInputProps } from 'react-native-paper'
import tw from '@/lib/tailwind'
import VectorIcon from './VectorIcon'

interface TextInputFormProps extends TextInputProps {
  name: string
}
/**
 * A custom text input component for forms.
 * @extends TextInputProps
 * @param {TextInputFormProps} props - The props for the text input form.
 * @returns A custom text input component.
 */

export default function TextInputForm(props: TextInputFormProps) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const [focus, setFocus] = useState(false)
  const [visible, setVisible] = useState(true)

  return (
    <View>
      <Controller
        control={control}
        render={({ field }) => (
          <View
            style={[
              tw`flex-row items-center rounded-md border-[1.5px]`,
              focus ? tw`border-[#0fb2d1]` : tw`border-[#a6a6a6]`,
            ]}
          >
            <TextInput
              {...props}
              onChangeText={field.onChange}
              onBlur={() => {
                field.onBlur()
                setFocus(false)
              }}
              onFocus={() => setFocus(true)}
              value={field.value}
              cursorColor="#1976f0"
              outlineColor="#a6a6a6"
              activeOutlineColor="#0fb2d1"
              mode="outlined"
              secureTextEntry={!props.secureTextEntry || visible}
              outlineStyle={tw`hidden`}
              style={[
                tw`flex-1`,
                props.style,
                { textAlignVertical: props.multiline ? 'top' : 'center' },
              ]}
            />
            {props.secureTextEntry && (
              <TouchableOpacity
                onPressIn={() => setVisible(false)}
                onPressOut={() => setVisible(true)}
                style={tw`rounded-full p-3`}
              >
                <VectorIcon
                  color="#a6a6a6"
                  name={visible ? 'eye' : 'eye-off'}
                  size={24}
                />
              </TouchableOpacity>
            )}
          </View>
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
