import React, { useEffect, useState } from 'react'

const BlogList = () => {
    const [blogs , setBlogs] = useState([])
     
    useEffect(() => {
        fetch('blogsdata.json')
        .then(response => response.json())
        .then(data => setBlogs(data))
        .catch(error => console.error("Error fetching blog data" + error))
    },[])


  return (
    <div className='container mx-auto'>
          <div>
            {
                blogs.map((blog , index) => (
                    <div key={index}>
                          <h1>{blog.title}</h1>
                    </div>
                ))
            }
          </div>
    </div>
  )
}

export default BlogList