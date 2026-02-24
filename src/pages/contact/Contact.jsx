import React from 'react'
import contactImage from '../../assets/connact.gif'

const Contact = () => {
  return (
    <section className='pt-28 pb-5'>
       <div className='container max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl font-semibold text-center mb-20'>Get In Touch</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-8'>
                <div className='space-y-4'>
                    <img src={contactImage} alt="" className='w-44 object-cover'/>
                    <h3 className='text-xl font-semibold'> Contact Information</h3>
                     <h3 className='text-xl font-semibold '>Contact Information</h3>
                    <p>Feel free to reach out to us through the form or the contact information below:</p>
                    <p><strong>Email:</strong> info@example.com</p>
                    <p><strong>Phone:</strong> +1 (123) 456-7890</p>
                    <p><strong>Address:</strong> 1234 Street Name, City, Country</p>
                </div>
                <div>
                     <form className='bg-white p-6 rounded-lg shadow-md'>
                          <div className='mb-4'>
                                <label htmlFor="Name" className='block text-gray-700 text-sm font-bold mb-2' >Name</label>
                                <input  type="text"  name='name' id='name' placeholder='name' className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                          </div>
                          <div className='mb-4'>
                                <label htmlFor="email" className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
                                <input  type="email"  name='email' id='email' placeholder='Your Email' className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                          </div>
                          <div className='mb-4'>
                                <label htmlFor="number" className='block text-gray-700 text-sm font-bold mb-2'>Phone</label>
                                <input type="number"  name='phone' id='phone' placeholder='Your Phone Number' className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500'/>
                          </div>
                          <div className='mb-4'>
                                <label htmlFor="message" className='block text-gray-700 text-sm font-bold mb-2'>Message</label>
                               <textarea rows={4} className='w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500' placeholder='Enter your message'>

                               </textarea>
                          </div>
                          <div>
                            <button className='w-full bg-secondary text-white py-2 px-4 rounded-md hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer focus:opacity-50'>Send Message</button>
                          </div>
                     </form>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Contact