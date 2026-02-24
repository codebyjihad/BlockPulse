import React, { useEffect, useState } from 'react'

const BlogList = () => {
    const [blogs , setBlogs] = useState([])
     
    useEffect(() => {
        fetch('blogsdata.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
    },[])

  return (
    <div className='container mx-auto'>

    </div>
  )
}

export default BlogList