import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
const Register = () => {
    const [email, setEmail] = useState('');
    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const [password, setpassword] = useState('');
    const handlePassword = (e) => {
        setpassword(e.target.value);
    }
    return (
        <div className='bg-pink-600 text-yellow-500 h-screen' style={{
            backgroundColor: 'pink',

        }}>
            <form action="" className='bg-black grid grid-rows-2'>
                <input type="text" onChange={handleEmail} className='bg-green-600' />
                <input type="password" onChange={handlePassword} className='bg-red-900' />
                <button>Login</button>
                <button>Register</button>
            </form>
        </div>
    )
}

export default Register
