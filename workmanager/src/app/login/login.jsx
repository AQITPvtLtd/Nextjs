"use client";
import UserContext from '@/context/UserContext';
import { login } from '@/services/userService';
import { useRouter } from 'next/navigation';
import React, { useContext, useState } from 'react'
import { toast } from 'react-toastify';

function Login() {
    const router = useRouter()
    const context = useContext(UserContext)
    const [loginData, setLoginData] = useState({
        email: '',
        password: '',
    });
    const loginFormSubmitted = async (event) => {
        event.preventDefault();
        console.log(loginData);
        if (loginData.email.trim() === "" || loginData.password.trim() === "") {
            toast.info("Invalid Data !!", { position: "top-center", });
            return;
        }
        try {
            const result = await login(loginData);
            console.log(result);
            toast.success("Logged in", { position: "top-center", });
            context.setUser(result.user)
            router.push("/profile/user");

        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message, { position: "top-center", });
        }
    }
    return (
        <div className='grid grid-cols-12'>
            <div className='col-span-4 col-start-5 shadow-gray-500 shadow-lg bg-black text-white p-5 rounded-lg'>
                <div className='py-5'>
                    <h1 className='text-2xl font-semibold text-center'>Login Here</h1>
                    <form action="" onSubmit={loginFormSubmitted}>
                        {/* email */}
                        <div className="mt-3">
                            <label htmlFor="user_email" className='block font-medium text-sm mb-2 ps-3'>Email</label>
                            <input type="email" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' id="user_email" name='user_email'
                                onChange={(event) => { setLoginData({ ...loginData, email: event.target.value, }); }} value={loginData.email}
                            />
                        </div>
                        {/* password */}
                        <div className="mt-3">
                            <label htmlFor="user_password" className='block font-medium text-sm mb-2 ps-3'>Password</label>
                            <input type="password" className='rounded-2xl w-full p-3 text-white bg-slate-500 focus:ring-red-400 border border-white' placeholder='Enter here' id="user_password" name='user_password'
                                onChange={(event) => { setLoginData({ ...loginData, password: event.target.value, }); }} value={loginData.password}
                            />
                        </div>
                        <div className="mt-3 text-center">
                            <button className='bg-green-600 py-2 px-3 rounded-lg hover:bg-green-400' type='submit'>Login</button>
                            <button className='bg-orange-600 py-2 px-3 rounded-lg hover:bg-orange-400 ms-3'>Reset</button>
                        </div>
                    </form>
                    {/* {JSON.stringify(loginData)} */}
                </div>
            </div>
        </div>
    )
}

export default Login