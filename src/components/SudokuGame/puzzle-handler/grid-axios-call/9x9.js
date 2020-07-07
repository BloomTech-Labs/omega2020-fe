import axios from 'axios';

export const Get9x9 = () =>
  axios
    .get('https://omega2020.herokuapp.com/puzzle') // or /gentle /9x9
    .then((res) => {
      console.log('AXIOS', res.data);
      return res.data;
    })
    .catch((err) => console.log(err.response));
