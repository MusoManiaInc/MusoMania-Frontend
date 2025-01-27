

"use client"
import React, { useEffect, useState } from 'react'

import ButtonHandler from './button-handler'

import { ArrowBigLeftDashIcon, ChevronLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import OTPInput from './otp-input'

type Props = {
    setOTP: React.Dispatch<React.SetStateAction<string>>
    onOTP: string
    currentStep: number
}

const OTPForm = ({setOTP,onOTP, currentStep}: Props) => {

  return (
    <>
        <div className="flex justify-start w-full items-center">
          <h2 className="text-gravel text-3xl md:text-4xl font-bold text-center w-full">Enter OTP</h2>
        </div>
        
        <p className="text-iridium md:text-sm text-center">
        Enter the OTP password that was sent to your email.
      </p>
      <div className="w-full justify-center flex py-5">
        <OTPInput
          otp={onOTP}
          setOTP={setOTP}
        />
      </div>
    </>
  )
}

export default OTPForm