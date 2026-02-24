import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'

const BlogList = () => {
    const [blogs , setBlogs] = useState([])
    const [searchTerm] = useState('')
    const [showBLogs , setShowBlogs] = useState(6)

    useEffect(() => {
        fetch('blogsdata.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error("Error fetching blog data" + error))
    },[])

    const handleMoreBlogs = () => {
      setShowBlogs(prev => prev + 3)
    }
    
    const filterBLogs = blogs.filter(blog => 
      blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      blog.author.name.toLowerCase().includes(searchTerm.toLowerCase())
    )




  return (
    <div className='container mx-auto'>
          <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
            {
                filterBLogs.slice(0 , showBLogs).map((blog , index) => (
                    <BlogCard key={index} blog={blog}/>
                ))
            }
          </div>
          {
            showBLogs < filterBLogs.length && (
              <div className='flex justify-center items-center mt-8 mb-8'>
                <button onClick={handleMoreBlogs} className='bg-secondary text-white hover:bg-secondary/80 font-semibold flex items-center justify-center px-6 py-2  transition-colors duration-200 cursor-pointer'>View More</button>
              </div>
            )
          }
    </div>
  )
}

export default BlogList