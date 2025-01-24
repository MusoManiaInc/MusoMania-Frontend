'use client'
import { useAuthContextHook } from '@/contexts/auth-context'
import { cn } from '@/lib/utils'
import React from 'react'

type Props = {}

const HighLightBar = (props: Props) => {
    const { currentStep } = useAuthContextHook()
    return (
      <div className='grid grid-cols-5 gap-3 mt-12'>
       <div className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 1 ? "bg-amber-400" : "bg-gray-300 dark:bg-zinc-600"
       )}></div>
       <div className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 2 ? "bg-amber-400" : "bg-gray-300 dark:bg-zinc-600"
       )}></div>
        <div className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 3 ? "bg-amber-400" : "bg-gray-300 dark:bg-zinc-600"
       )}></div>
        <div className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 4 ? "bg-amber-400" : "bg-gray-300 dark:bg-zinc-600"
       )}></div>
        <div className={cn(
          "rounded-full h-2 col-span-1",
          currentStep === 5 ? "bg-amber-400" : "bg-gray-300 dark:bg-zinc-600"
       )}></div>
      </div>
    )
}

export default HighLightBar