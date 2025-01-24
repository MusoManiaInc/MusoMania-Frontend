'use client'
import { Spinner } from '@/components/loader/spinner';
import { useAuthContextHook } from '@/contexts/auth-context';
import dynamic from 'next/dynamic';
import React, { useState } from 'react'
import { useFormContext } from 'react-hook-form';
import OTPForm from './otp-form';
import PreferencesForm from './prefrences-form';
import MusicPreferencesForm from './music-preferences-form';

const FirstStepForm = dynamic(()=> import('./first-step-form'),{
    ssr: false,
    loading: Spinner
})

const SignUpForm = dynamic(()=> import('./sign-up-form'),{
    ssr: false,
    loading: Spinner
})

type Props = {}

const RegistrationFormStep = (props: Props) => {
    const {
        register,
        formState:{errors},
        setValue,
    } = useFormContext();
    const { currentStep  } = useAuthContextHook();
    const [onOTP, setOnOTP] = useState<string>('');

    setValue('otp',onOTP);

switch(currentStep){
    case 1:
        return (
            <>
                <FirstStepForm
                    errors={errors} 
                    register={register}
                />
            </>
            
            
        )
    case 2:
        return (
            <>
                <SignUpForm
                    errors={errors} 
                    register={register}
                />
            </>
            
        )
    case 3:
        return (
            <>
                <OTPForm onOTP={onOTP} setOTP={setOnOTP} currentStep={currentStep} />
            </>
        )
    case 4:
        return (
            <>
                <PreferencesForm />
            </>
        )
    case 5:
        return (
            <>
                <MusicPreferencesForm />
            </>
        )
}

    return 
    <div>RegistrationFormStep</div>
}

export default RegistrationFormStep