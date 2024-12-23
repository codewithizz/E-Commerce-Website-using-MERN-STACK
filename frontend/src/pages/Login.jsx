import React, { useState } from 'react'

const Login = () => {

    const [currentState, setCurrentState] = useState('Login');

    const onSubmitHandler = async (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={onSubmitHandler} className='flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-[#D5006D]'>
            <div className='inline-flex items-center gap-2 mb-2 mt-10'>
                <p className='prata-regular text-3xl text-[#D5006D]'>{currentState}</p>
                <hr className='border-none h-[1.5px] w-8 bg-[#D5006D]' />
            </div>
            {currentState === 'Login' ? null : <input className='w-full px-3 py-2 border border-[#D5006D]' type="text" placeholder='Name' required />}
            <input className='w-full px-3 py-2 border border-[#D5006D]' type="email" placeholder='Email' required />
            <input className='w-full px-3 py-2 border border-[#D5006D]' type="password" placeholder='Password' required />
            <div className='w-full flex justify-between text-sm mt-[-8px]'>
                <p className='cursor-pointer text-[#D5006D]'>Forgot your password?</p>
                {
                    currentState === 'Login'
                        ? <p onClick={() => setCurrentState('Sign Up')} className='cursor-pointer text-[#D5006D]'>Create account</p>
                        : <p onClick={() => setCurrentState('Login')} className='cursor-pointer text-[#D5006D]'>Login here</p>
                }
            </div>
            <button type='submit' className='bg-[#D5006D] text-white font-light px-8 py-2 mt-4'>{currentState === 'Login' ? 'Sign in' : 'Sign up'}</button>
        </form>
    )
}

export default Login
           