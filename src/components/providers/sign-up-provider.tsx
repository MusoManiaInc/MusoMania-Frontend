
'use client'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Loader } from '../loader/loader'
import { AuthContextProvider } from '@/contexts/auth-context'

type Props = {
    children: React.ReactNode
  }

const SignUpFormProvider = ({children}:Props) => {
    const loading = false
    const methods = useForm()
  return (
    <AuthContextProvider>
        <FormProvider {...methods}>
            <form 
            //   onSubmit={onHandleSubmit}
            className='h-full'  
            >
            <div className="flex flex-col justify-center gap-3 h-full">
                <Loader loading={loading}>{children}</Loader>
            </div>
            </form>
        </FormProvider>
    </AuthContextProvider>
  )
}

export default SignUpFormProvider