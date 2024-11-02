import React from 'react'
import { useState } from 'react';

const ImageUpload = () => {

    const [files, setFiles] = useState(null);
    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        setFiles(selectedFile);
        console.log(e)
        console.log(e.target.files[0])

    }
    return (
        <div>
            <input type="file" accept='image/*' onChange={handleFileChange} />
            {
                files && <img src={URL.createObjectURL(files)} alt='uploading' style={{
                    height: '200px',
                    width: '300px'
                }} />
            }
        </div>
    )
}

export default ImageUpload
