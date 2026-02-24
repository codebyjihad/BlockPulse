import React from 'react'

const InputFailed = ({label , id ,  placeholder,  type, htmlFor}) => {
    return (
        <div className='mb-4'>
            <label htmlFor={htmlFor} className='block text-gray-700 text-sm font-bold mb-2' >{label}</label>
            <input type={type}  id={id} placeholder={placeholder} className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' />
        </div>
    )
}

export default InputFailed