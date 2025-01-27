'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import React, { useState } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import { ErrorMessage } from '@hookform/error-message'
import { Textarea } from '@/components/ui/textarea'
import { Eye, EyeClosed, EyeIcon, EyeOff } from 'lucide-react'
import { Button } from '../ui/button'
type Props = {
    type: 'text' | 'email' | 'password'
    inputType: 'select' | 'input' | 'textarea'
    options?: {value: string; label:string; id:string }[]
    label?:string
    register: UseFormRegister<any>
    name:string
    errors: FieldErrors<FieldValues>
    lines?:number
    form?:string
    placeholder: string
    defaultValue?: string
}

const FormGenerator = ({
    type,
    inputType,
    options,
    label,
    register,
    name,
    errors,
    placeholder,
    defaultValue,
    lines,
    form
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
    switch(inputType){
        case "input":
        default:
            return (
              <Label className="flex flex-col gap-2" htmlFor={`input-${label}`}>
              {label && label}
              <div className="relative">
                <Input
                  id={`input-${label}`}
                  type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                  placeholder={placeholder}
                  form={form}
                  required={true}
                  defaultValue={defaultValue}
                  className='dark:bg-zinc-700 rounded-full'
                  {...register(name)}
                />
                {/* Show/Hide toggle button for password */}
                {type === 'password' && (
                  <Button
                  type='button'
                    className="absolute bg-transparent rounded-full right-1 top-0 text-sm shadow-none text-zinc-400"
                    variant='none'
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <Eye className='w-4 h-4 '/>
                    ) : (
                      <EyeOff className='w-4 h-4'/>
                    )}
                  </Button>
                )}
              </div>
              <ErrorMessage
                errors={errors}
                name={name}
                render={({ message }) => (
                  <p className="text-red-400 mt-2">{message === 'Required' ? '' : message}</p>
                )}
              />
            </Label>
            
        )
        case 'select':
      return (
        <Label htmlFor={`select-${label}`}>
          {label && label}
          <select
            form={form}
            id={`select-${label}`}
            defaultValue={defaultValue}
            {...register(name)}
          >
            {options?.length &&
              options.map((option) => (
                <option
                  value={option.value}
                  key={option.id}
                >
                  {option.label}
                </option>
              ))}
          </select>
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
    case 'textarea':
      return (
        <Label
          className="flex flex-col gap-2"
          htmlFor={`input-${label}`}
        >
          {label && label}
          <Textarea
            form={form}
            id={`input-${label}`}
            placeholder={placeholder}
            {...register(name)}
            rows={lines}
            defaultValue={defaultValue}
          />
          <ErrorMessage
            errors={errors}
            name={name}
            render={({ message }) => (
              <p className="text-red-400 mt-2">
                {message === 'Required' ? '' : message}
              </p>
            )}
          />
        </Label>
      )
      
      
    }
}

export default FormGenerator