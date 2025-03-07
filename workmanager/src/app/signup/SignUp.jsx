"use client";
import React, { useState } from 'react'
import signUpBanner from "../../assets/signup.svg";
import Image from 'next/image';
import { toast } from 'react-toastify';
import { signUp } from '@/services/userService';

const SignUp = () => {
    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        about: '',
        profuleURL: 'https://imgs.search.brave.com/n24eamZZyFy2YdTSYarsWPVTDFMgxdJj-gUWTIGoYqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzkzLzI3/LzM2MF9GXzU4OTkz/Mjc4Ml92UUFFQVpo/SG5xMVFDR3U1aWt3/cllhUUQwTW11cm0w/Ti5qcGc',
    });

    const doSignup = async (event) => {
        event.preventDefault();
        console.log(event);
        console.log(data);
        if (data.name.trim() === "" || data.name == null) {
            toast.warning("Name is required", { position: "top-center", });
            return;
        }

        try {
            const result = await signUp(data)
            console.log(result)
            toast.success("User is registered !!", {
                position: "top-center",
            });
            setData({
                name: '',
                email: '',
                password: '',
                about: '',
                profuleURL: 'https://imgs.search.brave.com/n24eamZZyFy2YdTSYarsWPVTDFMgxdJj-gUWTIGoYqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzkzLzI3/LzM2MF9GXzU4OTkz/Mjc4Ml92UUFFQVpo/SG5xMVFDR3U1aWt3/cllhUUQwTW11cm0w/Ti5qcGc'
            });
        } catch (error) {
            console.log(error);
            console.log(error.response.data.message);
            toast.error("Signup Error !! " + error.response.data.message, {
                position: "top-center",
            });
        }
    };

    const resetForm = () => {
        setData({
            name: '',
            email: '',
            password: '',
            about: '',
            profuleURL: 'https://imgs.search.brave.com/n24eamZZyFy2YdTSYarsWPVTDFMgxdJj-gUWTIGoYqg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzA1Lzg5LzkzLzI3/LzM2MF9GXzU4OTkz/Mjc4Ml92UUFFQVpo/SG5xMVFDR3U1aWt3/cllhUUQwTW11cm0w/Ti5qcGc',
        })
    }

    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5 shadow-gray-500 shadow-lg bg-black text-white p-5 rounded-lg'>
                <div className='py-5'>
                    <div className='flex justify-center m-5'>
                        <Image src={signUpBanner} alt="signup banner" style={{ width: "50%", }} />
                    </div>
                    <h1 className='text-2xl font-semibold text-center'>Signup Here</h1>
                    <form action="" className='mt-5' onSubmit={doSignup}>
                        {/* name */}
                        <div className="mt-3">
                            <label htmlFor="user_name" className='block font-medium text-sm mb-2 ps-3'>Username</label>
                            <input type="text" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' name='user_name' onChange={(event) => { setData({ ...data, name: event.target.value, }); }} value={data.name} />
                        </div>
                        {/* email */}
                        <div className="mt-3">
                            <label htmlFor="user_email" className='block font-medium text-sm mb-2 ps-3'>Email</label>
                            <input type="email" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' id="user_email" name='user_email' onChange={(event) => { setData({ ...data, email: event.target.value, }); }} value={data.email} />
                        </div>
                        {/* password */}
                        <div className="mt-3">
                            <label htmlFor="user_password" className='block font-medium text-sm mb-2 ps-3'>Password</label>
                            <input type="password" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' id="user_password" name='user_password' onChange={(event) => { setData({ ...data, password: event.target.value, }); }} value={data.password} />
                        </div>
                        {/* about section */}
                        <div className="mt-3">
                            <label htmlFor="user_about" className='block font-medium text-sm mb-2 ps-3'>About</label>
                            <textarea type="text" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' id="user_about" name='user_about' onChange={(event) => { setData({ ...data, about: event.target.value, }); }} value={data.about}></textarea>
                        </div>
                        <div className="mt-3 text-center">
                            <button className='bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400' type='submit'>Signup</button>
                            <button onClick={resetForm} className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-400 ms-3'>Reset</button>
                        </div>
                    </form>
                    {/* {JSON.stringify(data)} */}
                </div>
            </div>
        </div>
    )
}

export default SignUp