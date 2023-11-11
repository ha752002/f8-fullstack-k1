
export const setItem = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export const getItem = (key) => {
    let value = localStorage.getItem(key)
    value = JSON.parse(value);
    return value;
}

export const removeItem = (key) => {
    localStorage.removeItem(key);
}

