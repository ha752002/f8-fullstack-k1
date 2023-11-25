
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}