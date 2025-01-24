import { InputOTP, InputOTPSlot } from '@/components/ui/input-otp'
import React from 'react'



type Props = {
    otp:string
    setOTP:React.Dispatch<React.SetStateAction<string>>
}

const OTPInput  = ({otp, setOTP}: Props) => {
    const maxLength = 6;
  return (
    <InputOTP
        maxLength={maxLength}
        value={otp}
        onChange={(otp)=> setOTP(otp)}    
    >
    <div className="flex gap-3">
        {Array.from({ length: maxLength }).map((_, index) => (
          <div key={index} className="">
            <InputOTPSlot index={index} />
          </div>
        ))}
    </div>
    
    </InputOTP>
  )
}

export default OTPInput 