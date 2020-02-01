import axios from 'axios';

export const GetHardPuzzle = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle/tough")
          .then(res => {
            return res.data;
          })
          .catch(err => console.log(err.response));
};
