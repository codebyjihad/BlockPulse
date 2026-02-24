import React from 'react'

const Textarea = ({label ,  placeholder,   htmlFor}) => {
    return (
        <div>
            <label type='text' htmlFor={htmlFor} className='block text-gray-700 text-sm font-bold mb-2'>{label}</label>
            <textarea rows={4} className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500' placeholder={placeholder}>

            </textarea>
        </div>
    )
}

export default Textarea