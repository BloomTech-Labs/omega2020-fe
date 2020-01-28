import React, { useState } from 'react'
import axios from 'axios'
import './UploadImage.css';

export default function UploadImage() {
  const [image, setImage] = useState({preview: '', raw: ''})
  
  const handleChange = (e) => {
    setImage({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })
  }
  
  const handleUpload = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('image', image.raw)
    console.log(image.raw)
    const config = { headers: { 'content-type': 'multipart/form-data' } }		
		
    try {
      const resp = await axios.post('http://flask-env2.us-east-2.elasticbeanstalk.com/upload', {image: image.raw}, config)
      console.log(resp);
    } catch (error) {
      console.log(error.response)
    }
  }

  return (

    <div align="center" style={{ marginTop: "10%" }}>
      <label htmlFor="upload-button">
        { image.preview ? <img src={ image.preview } width="300" height="300" alt="preview" /> : (
         <>
           <span className="fa-stack fa-2x mt-3 mb-2">
             <i className="fas fa-circle fa-stack-2x"></i>
             <i className="fas fa-store fa-stack-1x fa-inverse"></i>
           </span>
           <h5 className="text-center"> Upload your photo</h5>
         </> )}
      </label>
      <input type="file" id="upload-button"  onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button>
</div>
  )
}