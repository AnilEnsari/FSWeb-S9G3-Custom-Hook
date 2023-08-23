import { useState } from "react";
import useLocalStorage from "./localStorageKullan";

const useGeceModu = (key, initialMode) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialMode);

  return [darkMode, setDarkMode];
};

export default useGeceModu;
