import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import '../Sudoku.css';

const useNatureTheme = (naturetheme, initialValue) => {
    const [value, setValue] = useLocalStorage(naturetheme, initialValue);

    useEffect(() => {
        if (value === true) {
            document.querySelector('body').classList.add('nature-mode')
        } else {
            document.querySelector('body').classList.remove('nature-mode')
        }
    }, [value]);

    return [value, setValue];
}

export default useNatureTheme;