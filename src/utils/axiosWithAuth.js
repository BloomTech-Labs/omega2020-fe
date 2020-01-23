import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'https://omega2020.herokuapp.com',
        // baseURL: "http://localhost:7777",
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;