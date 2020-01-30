import React, { useState } from 'react'
import axios from 'axios'
import './UploadImage.css';
import Board from '../Board'


export default function UploadImage() {
  const [file, setFile] = useState({preview: 'file', raw: 'file'})
  const [solution, setSolution] = useState({puzzle_status: '', solution: '', values: ''})
  // const api = 'https://flask-env2.us-east-2.elasticbeanstalk.com/demo_file';
  const api = 'https://api.lambda-omega2020.com/demo_file';
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

      if (resp.data.puzzle_status === 1) {
        // valid with solution
        const solution = resp.data.solution;
        const values = resp.data.values;

        const puzzle = [];
        var row = [];
        for (var i = 0; i < solution.length; i++) {
          const editable = (values.charAt(i) === '.')
          const str = solution.charAt(i);
          row.push({editable: editable, cellValue: str});
          if (i > 0 && (i+1) % 9 === 0) {
            puzzle.push(row);
            row = [];
          }
        }
        console.log(puzzle)
        setGameBoardState({
          boardState : puzzle,
          puzzleId: "",
          history   : [],
          conflicts : new Set([])  
        });
  // no solution
      } else if (resp.data.puzzle_status === 2) {
      
      }
      console.log("RESPONSE", resp);
    } catch (error) {                                 
      console.log("ERROR", error)
    }
  }
  const [gameBoardState, setGameBoardState] = useState(
    {
      boardState : [],
      puzzleId: "",
      history   : [],
      conflicts : new Set([])  
    });

  return (

    <div align="center" style={{ marginTop: "10%" }}>
     <h2>Your Solved Puzzle</h2>
      <div>{solution.puzzle_status}</div>
      <div>{solution.solution}</div>
      <div>{solution.values}</div>  
      <Board 
                  className="Board"
                  boardState = {gameBoardState.boardState}
                  conflicts = {gameBoardState.conflicts}
                  historyLength = {gameBoardState.history.length}
      />
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