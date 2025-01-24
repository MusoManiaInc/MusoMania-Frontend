'use client'
import React from 'react'
import FormGenerator from '../form-generator'
import { USER_LOGIN_FORM, USER_REGISTRATION_FORM } from '@/constants/forms'
import { useFormContext } from 'react-hook-form'

type Props = {}

const SignInForm = (props: Props) => {
    const {
        register,
        formState: {errors},
    } = useFormContext()
  return (
    <>
        <h2 className="text-gravel text-3xl md:text-4xl dark:text-zinc-200 font-bold">Sign In</h2>
        <p className='text-sm text-gravel dark:text-zinc-400'>Get Started with MusoMania!</p>
        {USER_LOGIN_FORM.map((field)=>(
            <FormGenerator
                key={field.id}
                {...field}
                errors={errors}
                register={register}
                name={field.name}
            />
        ))}
    </>
  )
}

export default SignInForm