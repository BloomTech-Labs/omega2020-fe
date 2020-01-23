import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetPuzzles = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle")
          .then(res => {
            console.log("AXIOS", res.data);
            return res.data;
          })
          .catch(err => console.log(err.response));
};

// export const unsolvedPuzzle = "..43..2.9..5..9..1.7..6..43..6..2.8719...74...5..83...6.....1.5..35.869..4291.3..";
export const solvedPuzzle = { 
  puzzleId: "0", 
  data: "864371259325849761971265843436192587198657432257483916689734125713528694542916378"
};
export const unsolvedPuzzle = { 
  solvedPuzzleId: "0",
  data: "86437125932584976197126584343619258719865743225748391668973412571352869454291637."
};
// export const unsolvedPuzzle = { 
//     solvedPuzzleId: "0",
//     data: "..43..2.9..5..9..1.7..6..43..6..2.8719...74...5..83...6.....1.5..35.869..4291.3.."
//   };
