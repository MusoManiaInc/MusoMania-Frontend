'use client'

import { useRouter } from "next/navigation"
import { useState } from "react"
import { useToast } from "../use-toast"
import { useForm } from "react-hook-form"
import { zodResolver } from '@hookform/resolvers/zod'
import { UserRegistrationProps, UserRegistrationSchema } from "@/schemas/auth.schema"

export const useSignUpForm = () => {
    const { toast } = useToast()
    const [loading, setLoading] = useState<boolean>(false)
    const router = useRouter()

    const methods = useForm<UserRegistrationProps>({
        resolver: zodResolver(UserRegistrationSchema),
        defaultValues: {
          type: 'owner',
        },
        mode: 'onChange',
      })
    
    const registerUser = async (data:UserRegistrationProps)=>{
      setLoading(true)

      try {
        const response = await fetch('/api/')
      } catch (error) {
        
      }
    }  
}