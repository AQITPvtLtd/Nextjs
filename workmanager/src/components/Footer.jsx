"use client";
import React from 'react'

const Footer = () => {
  return (
    <footer className='h-40 bg-blue-600'>
        <div className='flex text-white p-5 justify-around'>
            <div className='text-center flex flex-col justify-center'>
                <h1 className='text-3xl'>Welcome to work manager</h1>
                <p>This footer shows all useful links of our website.</p>
            </div>
            <div className='text-center'>
                <h1>Important Links</h1>
                <ul>
                    <li>Facebook</li>
                    <li>Youtube</li>
                    <li>Instagram</li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer