import axiosWithAuth from '../../utils/axiosWithAuth';

function GetSavedPuzzle() {
<<<<<<< HEAD
 
    return axiosWithAuth()
        .get("/user-puzzles")
        .then(res => {
        console.log("AXIOS from GetSavedPuzzle", res.data);
        return res.data;
        })
        .catch(err => console.log(err.response));
};
=======
    return axiosWithAuth()
            .get('/user-puzzles')
            .then(res => {
                console.log("GetSavedPuzzle res.data: ", res.data)
                return res.data;
            })
            .catch(err => console.log(err.response));
};

>>>>>>> 94ae14b811ec09e44a4145976565ac3347d39ea8
export default GetSavedPuzzle;