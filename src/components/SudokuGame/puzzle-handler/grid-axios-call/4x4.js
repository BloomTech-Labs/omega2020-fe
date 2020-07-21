import axios from 'axios';

export const Get4x4 = () =>
  axios
    .get('https://omega2020.herokuapp.com/puzzle/4x4/easy')
    .then((res) => {
      console.log('AXIOS', res.data);
      return res.data;
    })
    .catch((err) => console.log(err.response));