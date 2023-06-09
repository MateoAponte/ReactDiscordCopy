import { useState } from 'react';

const UseLocalStorage = (key, payload) => {
  const [error, setError] = useState();
  const [item, setItem] = useState(payload);

  try {
    let localStorageItem = localStorage.getItem(key);
    let value;
    if (!!localStorageItem) {
      value = JSON.parse(localStorageItem);
    } else {
      localStorage.setItem(key, JSON.stringify(payload));
      value = payload;
    }
    setItem(value);
  } catch (err) {
    setError(err);
  }

  const saveItem = (newItem) => {
    try {
      const stringifiedItem = JSON.stringify(newItem);
      localStorage.setItem(key, stringifiedItem);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  const deleteItem = (key) => {
    try {
      localStorage.removeItem(key);
    } catch (error) {
      setError(error);
    }
  };

  return {
    error,
    saveItem,
    deleteItem,
    item,
    setItem,
  };
};

export default UseLocalStorage;
