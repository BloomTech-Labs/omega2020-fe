import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
import '../../App.css';

const useDarkMode = (darktheme, initialValue) => {
    const [value, setValue] = useLocalStorage(darktheme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('dark mode on')
            document.querySelector('body').classList.add('dark-mode')
        } else {
            document.querySelector('body').classList.remove('dark-mode')
            console.log('dark mode off')
        }
        console.log("VALUE", value)
    }, [value]);

    return [value, setValue];
}

export default useDarkMode;