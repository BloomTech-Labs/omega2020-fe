import { useState } from 'react'

const useLocalStorage = (key, initialValue) => {
    if (typeof key !== 'string') {
        throw new Error(
            'Invalid Parameters: useLocalStorage should receive a string for the first argument'
        );
    }

    const [storedValue, setStoredValue] = useState(() => {
        const item = window.localStorage.getItem(key);
        return item ? JSON.parse(item) : initialValue;
    });

    const setValue = value => {
        setStoredValue(value);
        window.localStorage.setItem(key, JSON.stringify(value));
    };

    return [storedValue, setValue];
};

export default useLocalStorage;