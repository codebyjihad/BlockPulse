import React, { useEffect, useState } from 'react'
import { Link } from 'react-router'

const ManageBlog = () => {
    const [blogs, setBlogs] = useState([])
    useEffect(() => {
        fetch('blogsdata.json')
            .then(response => response.json())
            .then(data => setBlogs(data))
            .catch(error => console.error("Error fetching blog data" + error))
    }, [])


    return (
        <section className='contaimer max-w-7xl mx-auto px-4 py-4'>
            <h2 className='text-2xl font-bold mb-6'>Manage Your Blog</h2>

            {
                blogs.length > 0 ? (<div className="min-w-full">
                    <div className="border border-table-line rounded-lg shadow-xs overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-none [&::-webkit-scrollbar-track]:bg-scrollbar-track [&::-webkit-scrollbar-thumb]:bg-scrollbar-thumb">
                        <table className="min-w-full divide-y divide-table-line">
                            <thead className="bg-muted">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-muted-foreground-1 uppercase">Title</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-muted-foreground-1 uppercase">Author</th>
                                    <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-muted-foreground-1 uppercase">Date</th>
                                    <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-muted-foreground-1 uppercase">Action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-table-line">

                                {
                                    blogs.map((blog, index) => (
                                        <tr key={index}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-foreground">{blog.title}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{blog.author.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-foreground">{
                                                blog?.date ? <span>{new Date(blog.date).toLocaleDateString()}</span> : <span>{new Date(blog.createAt).toLocaleString()}</span>
                                            }</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium space-x-2">
                                                <Link to={`/blogs/${blog._id}`} className='bg-blue-500 text-white px-2 py-1 hover:bg-blue-700 rounded'>View</Link>
                                                <Link to={`/blogs/edit/${blog._id}`} className='bg-yellow-500 text-white px-2 py-1 hover:bg-yellow-700 rounded'>Edit</Link>
                                                <Link>
                                                    <button className='bg-red-500 text-white px-2 py-1 hover:bg-red-700 rounded'>Delete</button>
                                                </Link>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>) : <div>No Data Found !</div>
            }

        </section>
    )
}

export default ManageBlog