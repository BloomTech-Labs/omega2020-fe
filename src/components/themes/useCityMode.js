import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import '../Sudoku.css';

const useCityMode = (citytheme, initialValue) => {
    const [value, setValue] = useLocalStorage(citytheme, initialValue);

    useEffect(() => {
        if (value === true) {
            document.querySelector('body').classList.add('city-mode')
        } else {
            document.querySelector('body').classList.remove('city-mode')
        }
    }, [value]);

    return [value, setValue];
}

export default useCityMode;