import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
import '../Sudoku.css'
import '../../App.css';

const useForestTheme = (naturetheme, initialValue) => {
    const [value, setValue] = useLocalStorage(naturetheme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('forest mode on')
            document.querySelector('body').classList.add('forest-mode')
        } else {
            document.querySelector('body').classList.remove('forest-mode')
            console.log('forest mode off')
        }
        console.log("VALUE", value)
    }, [value]);

    return [value, setValue];
}

export default useForestTheme;