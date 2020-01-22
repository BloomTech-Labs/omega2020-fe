import axios from 'axios';

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:7777',
        headers: {
            Authorization: token
        }
    });
};

export default axiosWithAuth;