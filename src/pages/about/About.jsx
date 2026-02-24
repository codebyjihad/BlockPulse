import React, { version } from 'react'
import missionImage from '../../assets/mession.jpg'
import vissionImage from '../../assets/vission.jpg'
const About = () => {
    return (
        <section className='py-28'>
            <div className='container max-w-7xl px-4 mx-auto text-primary'>
                {/* hero */}
                <div className='text-center mb-20'>
                    <h1 className='text-4xl font-semibold'>About Us</h1>
                    <p className='mt-5'>Learn more about our company, our mission, and the team that drives us forward. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nam libero obcaecati. Earum veniam debitis, repellendus omnis fugit sequi. Quia quaerat voluptatem, dolores vel officiis nulla corrupti nemo dolorem omnis?</p>
                </div>
                {/* mission */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-20'>
                    <div>
                        <h2 className='text-3xl font-semibold mb-4'>Our Mession</h2>
                        <p><p className='mb-4'>We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!</p></p>
                    </div>
                    <div>
                        <img src={missionImage} alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-95  transition-all duration-200 object-cover' />
                    </div>
                </div>
                {/* vission */}
                <div className='grid grid-cols-1 md:grid-cols-2 gap-3 items-center mb-20'>
                    <div className='order-1 md:order-2'>
                        <h2 className='text-3xl font-semibold mb-4'>Our Vission</h2>
                        <p className='mb-4'>We are dedicated to providing the best solutions for our customers by focusing on quality, innovation, and customer satisfaction. Our mission is to help you succeed in the digital age by delivering reliable and impactful digital products and services.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa nulla porro minima qui facilis ipsam molestiae sint mollitia facere ullam fugit, tenetur sunt ducimus debitis dolorem iusto blanditiis consequuntur maxime!</p>
                    </div>
                    <div>
                        <img src={vissionImage} alt="" className='w-full md:h-96 rounded-lg shadow-lg hover:scale-95  transition-all duration-200 object-cover' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About