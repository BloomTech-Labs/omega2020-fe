import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
// import '../Sudoku.css'
// import '../../App.css';
import '../Sudoku.css';

const useSkyMode = (skytheme, initialValue) => {
    const [value, setValue] = useLocalStorage(skytheme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('sky mode on')
            document.querySelector('body').classList.add('sky-mode')
        } else {
            document.querySelector('body').classList.remove('sky-mode')
            console.log('sky mode off')
        }
        console.log("VALUE", value)
    }, [value]);

    return [value, setValue];
}

export default useSkyMode;