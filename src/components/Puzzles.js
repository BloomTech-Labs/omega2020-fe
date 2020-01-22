import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetPuzzles() {
    const [puzzles, setPuzzles] = useState([]);

    useEffect(() => {
        axios
          .get("https://omega2020.herokuapp.com/puzzles")
          .then(res => {
            console.log("AXIOS", res.data);
            setPuzzles(res.data);
          })
          .catch(err => console.log(err.response));
      }, []);
    return puzzles;
};

// export const unsolvedPuzzle = "..43..2.9..5..9..1.7..6..43..6..2.8719...74...5..83...6.....1.5..35.869..4291.3..";
export const unsolvedPuzzle = {id: 1, data: ".48....7...........732.651.7..4.5...3...7...8...8.3..5.541.736...........1....25."}
// export const solvedPuzzle = "864371259325849761971265843436192587198657432257483916689734125713528694542916378";