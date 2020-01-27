import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
// import '../Sudoku.css'
// import '../../App.css';
import '../Sudoku.scss';

const useCityMode = (citytheme, initialValue) => {
    const [value, setValue] = useLocalStorage(citytheme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('city mode on')
            document.querySelector('body').classList.add('city-mode')
        } else {
            document.querySelector('body').classList.remove('city-mode')
            console.log('city mode off')
        }
        console.log("VALUE", value)
    }, [value]);

    return [value, setValue];
}

export default useCityMode;