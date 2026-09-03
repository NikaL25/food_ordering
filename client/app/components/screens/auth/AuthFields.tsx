import { View, Text } from 'react-native'
import React, { FC } from 'react'
import { IAuthFormData } from '@/types/auth.interface'
import { Control } from 'react-hook-form'
import Field from '@/components/ui/field/Field'
import { validEmail } from './email.regex'

interface IAuthFields {
    control: Control<IAuthFormData>
}

const AuthFields: FC<IAuthFields> = ({ control }) => {
  return (
    <>
      <Field
        placeholder="Enter email"
        control={control}
        name="email"
        rules={{
          required: "Email is required",
          pattern: {
            value: validEmail,
            message: "Please enter a valid email address",
          },
        }}
        keyboardType="email-address"
      />

      <Field
        placeholder="Password"
        control={control}
        name="password"
        secureTextEntry
        rules={{
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password should be at least 6 characters long",
          },
        }}
      />
    </>
  );
};

export default AuthFields