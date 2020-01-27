import { useState } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';

function GetSavedPuzzle() {
  const [resPuzzle, setResPuzzle] = useState("");
  axiosWithAuth()
    .get(`/user-puzzles/`)
    .then(res => {
        console.log("RESUMED PUZZLE", res);
        setResPuzzle(res.data);
  });
  return resPuzzle;
};
export default GetSavedPuzzle;