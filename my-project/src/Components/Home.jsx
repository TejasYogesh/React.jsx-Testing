import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();
    const gotoPage = (value) => {
        navigate(value);
    }
    return (
        <div className='h-screen bg-pink-700'>
            <div className='m-20 text-center p-20'>
                <p>This is Home</p>
                <button className='bg-white p-4 rounded-lg' onClick={() => {
                    gotoPage('/contact')
                }}>Click on Contact</button>
            </div>
        </div>
    )
}

export default Home
