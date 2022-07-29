export const useLocaleStorage = () => {
    const setItem = (key, value) => {
        return localStorage.setItem(String(key), String(value));
    };

    const getItem = (key) => {
        return localStorage.getItem(String(key));
    };

    const removeItem = (key) => {
        return localStorage.removeItem(String(key));
    };

    return [setItem, getItem, removeItem];
};
