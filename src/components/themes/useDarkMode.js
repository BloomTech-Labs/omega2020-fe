import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import '../Sudoku.css';

const useDarkMode = (darktheme, initialValue) => {
    const [value, setValue] = useLocalStorage(darktheme, initialValue);

    useEffect(() => {
        if (value === true) {
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
        }
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;