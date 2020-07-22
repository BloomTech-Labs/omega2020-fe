import axiosWithAuth from '../../../utils/axiosWithAuth';

export const postWithAuth = (puzzleId, req) => {
  axiosWithAuth()
    .post(`/user-puzzles/${puzzleId}`, req)
    .then((res) => {
      alert('Puzzle saved successfully');
      return puzzleId;
    });
};
