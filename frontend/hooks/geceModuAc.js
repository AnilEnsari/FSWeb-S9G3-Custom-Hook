import { useState } from "react";

export const useTheme = (initialData) => {
  const [nightMode, setNightMode] = useState(initialData);

  const handleMode = () => {
    setNightMode(!nightMode);
  };

  return [nightMode, handleMode];
};
