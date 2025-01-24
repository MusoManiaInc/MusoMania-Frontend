import { USERNAME_REGISTRATION_FORM } from '@/constants/forms'
import React from 'react'
import { useFormContext } from 'react-hook-form'
import FormGenerator from '../form-generator'
import { Checkbox } from '@/components/ui/checkbox'
import { preferences } from '@/constants'
import PreferencesCheckbox from './prefrences-checkbox'


type Props = {}

const PreferencesForm = (props: Props) => {
    const {
              register,
              formState: {errors},
              watch
          } = useFormContext()

          const selectedPreferences = watch('preferences', []);
  return (
    <>
    <h2 className="text-gravel text-3xl md:text-4xl dark:text-zinc-200 font-bold">Preferences</h2>
        <p className='text-sm text-gravel dark:text-zinc-400'>Check at least 3 musical preferences</p>
            <div className="flex flex-wrap gap-4 my-4">
                {preferences.map((field) => (
                    <PreferencesCheckbox
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

export default PreferencesForm