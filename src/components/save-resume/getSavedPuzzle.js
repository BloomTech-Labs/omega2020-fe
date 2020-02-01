import axiosWithAuth from '../../utils/axiosWithAuth';

function GetSavedPuzzle() {
    return axiosWithAuth()
            .get('/user-puzzles')
            .then(res => {
                return res.data;
            })
            .catch(err => console.log(err.response));
};

export default GetSavedPuzzle;