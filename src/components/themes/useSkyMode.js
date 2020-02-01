import useLocalStorage from './useLocalStorage';
import { useEffect } from 'react';
import '../Sudoku.css';

const useSkyMode = (skytheme, initialValue) => {
    const [value, setValue] = useLocalStorage(skytheme, initialValue);

    useEffect(() => {
        if (value === true) {
            document.querySelector('body').classList.add('sky-mode')
        } else {
            document.querySelector('body').classList.remove('sky-mode')
        }
    }, [value]);

    return [value, setValue];
}

export default useSkyMode;