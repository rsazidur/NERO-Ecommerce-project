import React from 'react'

import blogsData from '../../data/blogs.json'

const Blogs = () => {
    console.log(blogsData)
  return (
    <section className='section__container blog__container'>
        <h2 className='section__header'>Latest From Blog</h2>
        <p className='section__subheader'> Pc games are doing something big in the
        world of gaming. They are creating a new era of gaming. </p>
        
        <div>
            {
                blogsData.map((blog, index) => (
                    <div key={index} className='blog__card cursor-pointer hover:scale-105
                    transition-all duration-300'>
                        <img src={blog.imageUrl} alt="blog image" />
                        <div className='blog__card__content'>
                            <h6>{blog.subtitle}</h6>
                            <h4>{blog.title}</h4>
                            <p>{blog.date}</p>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Blogs