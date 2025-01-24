import React from 'react'

type Props = {
    title: string;
    icon:JSX.Element
    register: any; // React Hook Form's register function
  };

const PreferencesCheckbox = ({ title, register,icon }: Props) => {
  return (
    <div className="checkbox-wrapper-16">
    <label className="checkbox-wrapper">
        <input className="checkbox-input" type="checkbox" {...register('preferences')}/>
        <span className="checkbox-tile">
        <span className="checkbox-icon">
            {icon}
        </span>
        <span className="checkbox-label">{title}</span>
        </span>
    </label>
    </div>
  )
}

export default PreferencesCheckbox