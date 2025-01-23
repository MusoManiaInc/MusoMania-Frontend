import SignInForm from '@/components/forms/sign-in/sign-in-form'
import SignInFormProvider from '@/components/providers/sign-in-provider'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

type Props = {}

const SignIn = (props: Props) => {
  return (
    <div className="flex-1 py-36 md:px-16 w-full">
    <div className="flex flex-col h-full gap-3">
      <SignInFormProvider>
        <div className="flex flex-col gap-3">
          <SignInForm/>
          {/* <div className="">
            <Link href="/auth/forget-password" className='text-sm hover:text-blue-500 underline duration-200 ease-in-out hover:opacity-80'>Forgot Password?</Link>
          </div> */}
          <div className="w-full flex flex-col gap-3 items-center">
            <Button type="submit" variant="default" className='w-full rounded-full text-black font-semibold bg-amber-300 hover:bg-amber-400'>
              Submit
            </Button>
            <p className='dark:text-zinc-500'>
              Don't have an account?{' '}
              <Link href="/auth/sign-up" className='font-bold dark:text-zinc-400 hover:underline'>
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </SignInFormProvider>
    </div>
   </div>
  )
}

export default SignIn