import React from 'react'
import InputFailed from './InputFailed'
import { useForm, } from "react-hook-form"
import Textarea from './Textarea'

const AddBlogs = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = data => {
        const blogdata = {
            title:data.title,
            desctiption:data.desctiption,
            image:data.image,
            author:{
                name:data.authorName,
                image:data.authorImage
            }
        }


    }


    return (
        <div className='container max-w-7xl mx-auto px-4 py-24 '>
            <h2 className='text-2xl font-bold mb-6'>Add new Blog</h2>
            {/* from */}
            <form onSubmit={handleSubmit(onSubmit)} className='bg-white max-w-3xl p-6 rounded-lg shadow-md space-y-4'>
                <InputFailed label='blog title'
                    id='title'
                    htmlFor='blog title'
                    register={register('title' , {required:true})}
                    type='text'
                    placeholder='Blog title'
                />
                {/* textArea */}
                <Textarea label='Blog Description'
                    id='description'
                    htmlFor='blog description'
                     register={register('description' , {required:true})}
                    type='text'
                    placeholder='Blog Description' />
                <InputFailed label='Author Name'
                    id='authorName'
                    htmlFor='author name'
                     register={register('authorName' , {required:true})}
                    type='text'
                    placeholder='author name'
                />
                <InputFailed label='Author Image Url'
                    id='authorImage'
                    htmlFor='auhor image'
                    type='url'
                     register={register('authorImage' , {required:true})}
                    placeholder='Author Image Url'
                />
                <InputFailed label='Blog Image url'
                    id='Image'
                    htmlFor='blog image'
                     register={register('Image' , {required:true})}
                    type='url'
                    placeholder='Blog Image Url'
                />
                <div>
                    <button className='w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:opacity-50'>Send Message</button>
                </div>
            </form>
        </div>
    )
}

export default AddBlogs