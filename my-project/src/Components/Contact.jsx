import React from 'react'
import { useNavigate } from 'react-router-dom'
const Contact = () => {
    const Navigate = useNavigate();
    const gotoback = () => {
        Navigate(-1);
    }
    return (
        <div>
            <p>This is Contact.</p>
            <button onClick={gotoback} className='bg-sky-400 h-screen w-screen'><p>Go to Back Function</p></button>
        </div>
    )
}

export default Contact
