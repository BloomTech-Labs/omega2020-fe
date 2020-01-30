import React, { useState } from 'react'
import axios from 'axios'
import './UploadImage.css';


export default function UploadImage() {
  const [file, setFile] = useState({preview: 'file', raw: 'file'})
  const [solution, setSolution] = useState({puzzle_status: '', solution: '', values: ''})
  const api = 'https://flask-env2.us-east-2.elasticbeanstalk.com/demo_file';
  const handleChange = (e) => {
    setFile({
      preview: URL.createObjectURL(e.target.files[0]),
      raw: e.target.files[0]
    })
    console.log("FILE", file)
  }

  const handleUpload = async (e) => {
    e.preventDefault()         
    const fileBlob = new Blob([file.raw]);
    const formData = new FormData()

    formData.append('file', fileBlob, fileBlob.filename);
    const formConfig = { headers: { 'content-type': 'multipart/form-data' } }		
		
    try {
      const resp = await axios.post(api, formData, formConfig)
      setSolution(resp.data);
      setFile({});
      console.log("RESPONSE", resp);
    } catch (error) {                                 
      console.log("ERROR", error.response)
    }
  }

  return (

    <div align="center" style={{ marginTop: "10%" }}>
      <h2>Your Solved Puzzle</h2>
      <div>{solution.puzzle_status}</div>
      <div>{solution.solution}</div>
      <div>{solution.values}</div>
      <label htmlFor="upload-button">
        { file.preview ? <img src={ file.preview } width="300" height="300" alt="preview" /> : (
         <>
           <span className="fa-stack fa-2x mt-3 mb-2">
             <i className="fas fa-circle fa-stack-2x"></i>
             <i className="fas fa-store fa-stack-1x fa-inverse"></i>
           </span>
           <h5 className="text-center"> Upload your image</h5>
         </> )}
      </label>
      <input type="file" name="file" id="upload-button"  onChange={handleChange}/>
      <button onClick={handleUpload}>Upload</button>
</div>
  )
}