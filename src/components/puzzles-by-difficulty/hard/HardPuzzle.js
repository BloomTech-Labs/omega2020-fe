import { useState, useEffect } from 'react';
import axios from 'axios';

export const GetHardPuzzle = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle/tough")
          .then(res => {
            console.log("AXIOS", res.data);
            return res.data;
          })
          .catch(err => console.log(err.response));
};
