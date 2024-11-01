import React from 'react'
import { useEffect, useState } from 'react';
const Eight = () => {
    const [background, setBackground] = useState('green');
    const handleColor = () => {
        const bg = background === 'green' ? 'skyblue' : 'green';
        setBackground(bg);
    }
    return (
        <div>
            <div style={{
                backgroundColor: background,
                height: '100px',
                width: '100px',
                cursor: 'pointer'
            }} onClick={handleColor}>Click on Me</div>
        </div>
    )
}

export default Eight
