import SignUpForm from '@/components/forms/sign-up/sign-up-form'
import SignUpFormProvider from '@/components/providers/sign-up-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignUp = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
    <div className="flex flex-col h-full gap-3">
      <SignUpFormProvider>
        <div className="flex flex-col gap-3">
          <SignUpForm/>
          {/* <div className="">
            <Link href="/auth/forget-password" className='text-sm hover:text-blue-500 underline duration-200 ease-in-out hover:opacity-80'>Forgot Password?</Link>
          </div> */}
          <div className="w-full flex flex-col gap-3 items-center">
            <Button type="submit" variant="default" className='w-full bg-amber-300'>
              Submit
            </Button>
            <p className='dark:text-zinc-500'>
              Have an account?{' '}
              <Link href="/auth/sign-in" className='font-bold dark:text-zinc-400 hover:underline'>
                Sign In
              </Link>
            </p>
          </div>
        </div>
      </SignUpFormProvider>
    </div>
   </div>
  )
}

export default SignUp