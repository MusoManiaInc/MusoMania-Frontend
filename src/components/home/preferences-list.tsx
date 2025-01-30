import React, { ReactNode } from 'react'

type Props = {
    title:string
}

const PreferencesList = ({title}: Props) => {
  return (
    <li className='rounded-full text-xl text-center border py-2 px-4 border-gray-700 transition-all duration-100 ease-linear hover:bg-yellow-100 cursor-pointer'>
        {title}   
    </li>
  )
}

export default PreferencesList