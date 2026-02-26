import React from 'react'
import { Link } from 'react-router'
import bannerImage from '../assets/banner.png'
import { GoPersonFill } from "react-icons/go";

const Banner = () => {
    const date = new Date()
    const formattedDate = date.toLocaleString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className='my-16'>
          <div className='text-center mb-8'>
              <h1 className='text-4xl font-semibold mb-4'>BlockPluse</h1>
              <ul className='flex flex-wrap  items-center justify-center gap-4'>
                <Link to='/' className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Home</Link>
                <Link to='/add-blog' className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Add New Blog</Link>
                <Link to='/manage_blog' className='bg-secondary/10 px-2.5 py-1 rounded-full hover:text-secondary hover:underline underline-offset-4'>Manage Blog</Link>
              </ul>
          </div>
          {/* Banner Image */}
          <div className='text-white'>
            <div className='md:min-h-[450px] h-80 w-full bg-center bg-cover bg-no-repeat rounded-md' style={{backgroundImage:`url(${bannerImage})`}}>
                <div className='flex flex-col h-full justify-end p-5'>
                    <span className='bg-secondary text-white text-center max-w-36 px-4 py-1 rounded-md mb-3'>Technology</span>
                    <h2 className='sm:text-3xl text-2xl font-semibold md:w-1/2 mb-5 '>The impact of Technology on the Workplace: How Technology is Changing</h2>
                    <div className='flex items-center gap-2'>
                       <GoPersonFill className='size-8'/>
                       <div className='flex flex-wrap items-center space-x-4'>
                          <span className='ml-2 text-balance cursor-pointer hover:underline underline-offset-2'>Tracay Wilson</span>
                          <span>{formattedDate}</span>
                       </div>
                    </div>
                </div>
            </div>
          </div>
    </div>
  )
}

export default Banner


