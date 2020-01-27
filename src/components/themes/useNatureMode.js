import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
// import '../Sudoku.css'
// import '../../App.css';
import '../Sudoku.scss';

const useNatureTheme = (naturetheme, initialValue) => {
    const [value, setValue] = useLocalStorage(naturetheme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('nature mode on')
            document.querySelector('body').classList.add('nature-mode')
        } else {
            document.querySelector('body').classList.remove('nature-mode')
            console.log('nature mode off')
        }
        console.log("VALUE", value)
    }, [value]);

    return [value, setValue];
}

export default useNatureTheme;