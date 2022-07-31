export const useLocaleStorage = () => {
    const setItem = (key, value, parse = true) => {
        if (!parse) {
            return localStorage.setItem(String(key), value);
        } else {
            return localStorage.setItem(String(key), String(value));
        }
    };

    const getItem = (key) => {
        return localStorage.getItem(key);
    };

    const removeItem = (key) => {
        return localStorage.removeItem(String(key));
    };

    return [setItem, getItem, removeItem];
};
