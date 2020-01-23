import useLocalStorage from './useLocalStorage'
import { useEffect } from 'react';
import '../../App.css';

const useDefaultMode = (theme, initialValue) => {
    const [value, setValue] = useLocalStorage(theme, initialValue);

    useEffect(() => {
        if (value === true) {
            console.log('default mode on')
            document.querySelector('body').classList.add('default-mode')
        } else {
            document.querySelector('body').classList.remove('default-mode')
            console.log('default mode off')
        }
    }, [value]);

    return [value, setValue];
}

export default useDefaultMode;