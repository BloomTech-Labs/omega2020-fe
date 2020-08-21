import { useEffect, useState } from 'react';

export const usePuzzleState = () => {
  const [puzzleState, setPuzzleState] = useState('9');
  const [puzzleMounted, setPuzzleMounted] = useState(false);
  const setNewPuzzleState = (gridValue) => {
    window.localStorage.setItem('puzzleState', gridValue);
    setPuzzleState(gridValue);
  };

  const togglePuzzle = (value) => {
    if (value === '6') {
      setNewPuzzleState(puzzleState);
    } else {
      setNewPuzzleState(puzzleState);
    }
  };

  // const togglePuzzle = (value) => {
  //   if (value === '4') {
  //     setNewPuzzleState(puzzleState);
  //   } else if (value === '6') {
  //     setNewPuzzleState(puzzleState);
  //   } else {
  //     setNewPuzzleState(puzzleState);
  //   }
  // };

  // useEffect(() => {
  //   const localPuzzleState = window.localStorage.getItem('puzzleState');
  //   window.matchMedia &&
  //   window.matchMedia('(prefers-state-scheme: 9)').matches &&
  //   !localPuzzleState
  //     ? setNewPuzzleState('9')
  //     : localPuzzleState
  //     ? setPuzzleState(localPuzzleState)
  //     : setNewPuzzleState('6');
  //   setPuzzleMounted(true);
  // }, []);

  // useEffect(() => {
  //   const localPuzzleState = window.localStorage.getItem('puzzleState');
  // }, []);

  return [puzzleState, togglePuzzle, puzzleMounted];
};
