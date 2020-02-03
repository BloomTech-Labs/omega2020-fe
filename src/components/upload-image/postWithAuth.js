import axiosWithAuth from '../../utils/axiosWithAuth';

export const postWithAuth = (puzzleId, req) => {
    axiosWithAuth()
    .post(`/user-puzzles/${puzzleId}`, req)
    .then(res => {
      console.log("REQ", res);
      return puzzleId;
  });
};
