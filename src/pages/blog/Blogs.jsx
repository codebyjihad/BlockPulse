import React from 'react'
import Banner from '../../components/Banner'
import BlogList from './BlogList'

const Blogs = () => {
  return (
    <div className='container max-w-7xl mx-auto px-4 py-3'>
          <Banner/>
          <BlogList/>
    </div>
  )
}

export default Blogs