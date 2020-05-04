    import { useState } from 'react'

    const useLocalStorage = ( key, initialValue) => {
        const [storedValue, setStoredValue] = useState(() => {
            const task = window.localStorage.getItem(key)
            return task ? JSON.parse(task) : initialValue
        })

        const setValue = (value) => {
            setStoredValue(value) // Set state
            window.localStorage.setItem(key,JSON.stringify(value))
        }
        return [storedValue, setValue]
    }
    export default useLocalStorage