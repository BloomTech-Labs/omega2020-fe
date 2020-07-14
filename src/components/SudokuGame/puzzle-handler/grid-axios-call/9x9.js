import axios from 'axios';

export const Get9x9 = () =>
  axios
    .get('https://omega2020.herokuapp.com/puzzle/9x9/easy')
    .then((res) => {
      console.log('AXIOS', res.data);
      return res.data;
    })
    .catch((err) => console.log(err.response));
