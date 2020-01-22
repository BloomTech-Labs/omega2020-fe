import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function GetPuzzles() {
    const [puzzles, setPuzzles] = useState([]);

    useEffect(() => {
        axios
          .get("omega2020database@omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com")
          .then(res => {
            console.log("AXIOS", res);
            // setPuzzles(res.data[0].data);
          })
          .catch(err => console.log(err.response));
      }, []);
    return puzzles;


//    axios.get('https://omega2020.cbydc0au6atn.us-east-2.rds.amazonaws.com'
//    , {
//     params: { 'Username': 'postgres',
//       'Password': 'omega2020database'}
//   })
//     .then((res) => {
//      console.log(res.data);

//     }).catch((err) => {
//  console.log(err.message);

//     });
// }, []);
}
export const unsolvedPuzzle = "..43..2.9..5..9..1.7..6..43..6..2.8719...74...5..83...6.....1.5..35.869..4291.3..";
// export const solvedPuzzle = "864371259325849761971265843436192587198657432257483916689734125713528694542916378";