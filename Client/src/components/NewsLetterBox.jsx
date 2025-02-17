import React from 'react'

const NewsLetterBox = () => {
    const onSubmitHandeler = (e)=>{
        e.preventDefault();
    }

  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now and get 20% off</p>
      <p className='text-gray-400 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, alias?</p>
      <form onSubmit={onSubmitHandeler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type='email' placeholder='Enter your email address' className='w-full sm:flex-1 outline-none' required />
        <button type='submit' className='bg-gray-800 text-white text-xs py-4 px-10 cursor-pointer'>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsLetterBox
