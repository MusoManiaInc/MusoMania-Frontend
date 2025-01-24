import { instruments, preferences } from '@/constants'
import React from 'react'
import IntrumentalPreferences from './instrumental-preferences'
import { useFormContext } from 'react-hook-form'

type Props = {}

const MusicPreferencesForm = (props: Props) => {
    const {
                  register,
                  formState: {errors},
                  watch
              } = useFormContext()
  return (
    <>
    <h2 className="text-gravel text-3xl md:text-4xl dark:text-zinc-200 font-bold">Instrumental Preferences</h2>
        <p className='text-sm text-gravel dark:text-zinc-400'>Check at least 1 instrument/s</p>
            <div className="flex flex-wrap gap-4 my-4">
                {instruments.map((field) => (
                    <IntrumentalPreferences
                        key={field.title}
                        title={field.title}
                        register={register}
                        icon={field.icon}
                    />
                ))}
            </div>
    </>
  )
}

export default MusicPreferencesForm