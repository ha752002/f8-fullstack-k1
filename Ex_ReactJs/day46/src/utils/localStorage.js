const setLocalStorage = (key, value) => {
     localStorage.setItem(key, JSON.stringify(value))
}

const getLocalStorage = (key )=> {
   let value= localStorage.getItem(key);
    return  JSON.parse(value);
}

const removeLocalStorage = (key )=> {
   localStorage.removeItem(key);
}

export {setLocalStorage, getLocalStorage,removeLocalStorage}

