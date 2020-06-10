import axios from 'axios';

export const GetEasyPuzzle = () => {

        return axios
          .get("https://omega2020.herokuapp.com/puzzle/gentle")
          .then(res => {
            console.log("AXIOS", res.data);
            return res.data;
          })
          .catch(err => console.log(err.response));
};
