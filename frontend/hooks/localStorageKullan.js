import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const [storedMode, setStoredMode] = useState(() => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  });
  const updateMode = (value) => {
    localStorage.setItem(key, JSON.stringify(value));
    setStoredMode(value);
  };
  return [storedMode, updateMode];
};

export default useLocalStorage;
