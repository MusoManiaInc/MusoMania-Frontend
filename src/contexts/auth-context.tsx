"use client"
import React, { useState } from 'react'

type InitialValuesProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
  otpCode: string
  setOtpCode: React.Dispatch<React.SetStateAction<string>>
}

const InitialValues: InitialValuesProps = {
  currentStep: 1,
  setCurrentStep: () => undefined,
  otpCode: '',  // Initialize OTP as an empty string
  setOtpCode: () => undefined,
}

const authContext = React.createContext<InitialValuesProps>(InitialValues)

const { Provider } = authContext

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [currentStep, setCurrentStep] = useState<number>(InitialValues.currentStep)
  const [otpCode, setOtpCode] = useState<string>(InitialValues.otpCode)  // Add OTP state
  
  const values = {
    currentStep,
    setCurrentStep,
    otpCode,
    setOtpCode,
  }
  return <Provider value={values}>{children}</Provider>
}

export const useAuthContextHook = () => {
  const state = React.useContext(authContext)
  return state
}
