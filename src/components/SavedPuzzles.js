import React, { useState, useEffect } from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';
// import GetUserPuzzles, { userPuzzles }  from './UserPuzzles';


// const savePuzzle = e => {
//     e.preventDefault();
//     axiosWithAuth()
//     .post('/puzzleId', {"puzzle":  id})
//     .then(res => console.log("Saved Res: ", res))
//     .catch(err => console.log(err))
//   }


  const SavedPuzzles = () => {
    const [userPuzzles, setUserPuzzles] = useState([]);

    useEffect(() => {
      axiosWithAuth()
          .get("/user-puzzles/")
          .then(res => {
            console.log("AXIOS", res.data);
            setUserPuzzles(res.data);
          })
          .catch(err => console.log(err.response));
      }, []);
    
    return (
        <div className = "PuzzlesList">
          User Puzzles:
          
          {userPuzzles.map(data =>  <div>ID: {data.id} Difficulty: {data.difficulty} Time: {data.time} PuzzleID: {data.puzzle_id}</div> )}

        </div>
            )
  }

  export default SavedPuzzles;

