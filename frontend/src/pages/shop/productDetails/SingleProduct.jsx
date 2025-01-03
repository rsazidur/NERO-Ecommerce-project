import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import RatingStars from '../../../components/RatingStars';

const SingleProduct = () => {
    const {id} = useParams();
  return (
    <>
        <section className='section__container bg-primary-light'>
                <h2 className='section__header capitalize'>Single Product Page</h2>
                <div className='section__subheader space-x-2'>
                    <span className='hover:text-primary'><Link to="/">home</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'><Link to="/shop">shop</Link></span>
                    <i className='ri-arrow-right-s-line'></i>
                    <span className='hover:text-primary'>product name</span>
                </div>
            </section>

            <section className='section__container mt-8'>
                <div className='flex flex-col items-center md:flex-row gap-8'>
                    {/* Product Image */}
                    <div className='md:w-1/2 w-full'>
                        <img src='/images/products/rdr2.jpg' alt='' className='rounded-md w-full h-auto'/>
                    </div>

                    <div className='md:w-1/2 w-full'>
                        <h3 className='text-2xl font-semibold mb-4'>Product Name</h3>
                        <p className='text-xl text-primary mb-4'>$100 <s>$130</s></p>
                        <p className='text-gray-400 mb-4'>Game of the year, this game is the combind of all others</p>

                        {/* additonal product info */}
                        <div>
                            <p><strong>Category:</strong>PC, PS4, XBOX</p>
                            <p><strong>Type:</strong>Open World Action-Adventure</p>
                            <div className='flex gap-1 items-center'>
                                <strong>Rating</strong>
                                <RatingStars rating={"5"}/>
                            </div>
                        </div>

                        {/* Add to cart */}
                        <button className='bg-primary text-white rounded-md mt-6 px-6 py-3'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </section>
        
        {/* Product Review */}
        <section className='section__container mt-8'>

        </section>
    </>
  )
}

export default SingleProduct