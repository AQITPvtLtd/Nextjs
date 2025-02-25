"use client";
import React from 'react'

const SignUp = () => {
  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5'>
            <div className='py-5'>
                <h1 className='text-3xl text-center'>Signup Here</h1>
                <form action="" className='mt-5'>
                    <div className="mt-3">
                        <label htmlFor="user_name" className='block font-medium text-sm mb-2 ps-3'>Username</label>
                        <input type="text" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' />
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignUp