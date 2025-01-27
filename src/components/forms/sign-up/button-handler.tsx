'use client'
import { Button } from '@/components/ui/button'
import { useAuthContextHook } from '@/contexts/auth-context'


import Link from 'next/link'
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form'

type Props = {
  onOTP?: string
}

const ButtonHandler = ({onOTP}: Props) => {
  const { setCurrentStep, currentStep } = useAuthContextHook()
  const { formState, getValues } = useFormContext()
  // const { onGenerateOTP, loading  } = useSignUpForm()
  // const [otpError, setOtpError] = useState(false)

  
  
  const handleContinue = async () => {
    setCurrentStep(currentStep + 1)
  }

  if (currentStep === 2) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="button"
          className="w-full bg-amber-300 hover:bg-amber-400 rounded-full text-black font-semibold"
          onClick={handleContinue}
        >
          Continue
        </Button>
        <p className='dark:text-zinc-500'>
          Already have an account?{' '}
          <Link href="/auth/sign-in" className="font-bold dark:text-zinc-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    )
  }
  if (currentStep === 3) {
    return (
      <div className="w-full flex flex-col gap-3 items-center">
        <Button
          type="button"
          className="w-full bg-amber-300 hover:bg-amber-400 rounded-full text-black font-semibold"
          onClick={handleContinue}
        >
          Submit
        </Button>
        <p className='dark:text-zinc-500'>
          Already have an account?{' '}
          <Link href="/auth/sign-in" className="font-bold dark:text-zinc-400 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    )
  }


  return (
    <div className="w-full flex flex-col gap-3 items-center">
      <Button
        type="button"
        className="w-full bg-amber-300 hover:bg-amber-400 rounded-full text-black font-semibold"
        onClick={handleContinue}
      >
        Continue
      </Button>
      <p className='dark:text-zinc-500'>
          Already have an account?{' '}
          <Link href="/auth/sign-in" className="font-bold dark:text-zinc-400 hover:underline">
            Sign In
          </Link>
        </p>
    </div>
  )
}

export default ButtonHandler