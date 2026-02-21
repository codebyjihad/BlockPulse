import React from 'react'
import { Link } from 'react-router'

const Logo = () => {
    return (
        <Link to='/' className='flex items-center space-y-2'>
            <img src='/logo.jpg' className='w-10 h-10 object-cover rounded-full' />
            <span className='text-green-500 text-xl font-bold'>BlockPluse</span>
        </Link>
    )
}

export default Logo