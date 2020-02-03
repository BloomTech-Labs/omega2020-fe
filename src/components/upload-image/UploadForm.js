import React, { useState } from 'react'
import axios from 'axios'
import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
// import Alert from '@material-ui/lab/Alert';
import './UploadImage.css';
import Board from '../Board'
import { postImage } from './postImage'
import UploadSudoku2 from './UploadSudoku2'


export default function UploadForm() {
  const [file, setFile] = useState({preview: null, raw: null})
  const [solution, setSolution] = useState({puzzle_status: '', solution: '', values: ''})

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
    // try {
      const asolution = await postImage(formData, formConfig);
      const puzzleStatus = await asolution.puzzle_status;
      const original = asolution.values;
      const level = asolution.difficulty;
      const solved = asolution.solution;

      await setSolution(asolution);
      await setFile({});

      if (puzzleStatus === 1) {
          // valid with solution;
          const isPuzzle = true
          setSolution(asolution)
          return asolution
        
   
  // no solution
      } else if (puzzleStatus === 2) {
       alert('Puzzle is invalid. Please take another picture and try again.')
      }

      console.log("RESPONSE", solution);
    // } catch (error) {                                 
    //   console.log("ERROR", error)
    // }
  }
//   setSolution(asolution)
//   const [gameBoardState, setGameBoardState] = useState(
//     {
//       boardState : [],
//       puzzleId: "",
//       history   : [],
//       conflicts : new Set([])  
//     });

  return (
      <>
      {solution.puzzle_status===1 ? <UploadSudoku2 solution={solution} /> 
      :
      <div align="center" style={{ marginTop: "15%" }}>

        <label htmlFor="upload-button">
            { file.preview ? <img src={ file.preview } width="400" height="400"  id="preview" alt="Upload your image" /> : (
            <>
            </> )}
        </label>
      
        <input type="file" name="file" id="input-file"  onChange={handleChange}/>
        <Button
            variant="contained"
            color="primary"
            className = "gameControlBtn"
            onClick={handleUpload}
            startIcon={<CloudUploadIcon />}
        >Upload
        </Button>
      </div>
        }
        </>)
}