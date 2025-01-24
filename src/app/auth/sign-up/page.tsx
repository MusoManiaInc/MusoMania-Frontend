import ButtonHandler from '@/components/forms/sign-up/button-handler'
import HighLightBar from '@/components/forms/sign-up/highlight-bar'
import RegistrationFormStep from '@/components/forms/sign-up/registration-form-step'
import SignUpForm from '@/components/forms/sign-up/sign-up-form'
import SignUpFormProvider from '@/components/providers/sign-up-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 flex flex-col justify-center h-full  md:px-16 w-full">
    <div className="flex flex-col  h-full gap-3">
      <SignUpFormProvider>
        <div className="flex flex-col gap-3">
          <RegistrationFormStep/>
          <ButtonHandler/>
        </div>
        <HighLightBar/>
      </SignUpFormProvider>
    </div>
   </div>
  )
}

export default SignUp