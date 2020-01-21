import React from 'react';

import axiosWithAuth from '../utils/axiosWithAuth';



const savePuzzle = e => {
    e.preventDefault();
    axiosWithAuth()
    .post('/puzzleId', {"puzzle":  id})
    .then(res => console.log("Saved Res: ", res))
    .catch(err => console.log(err))
  }


