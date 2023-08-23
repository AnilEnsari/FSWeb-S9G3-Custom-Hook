// import { useState } from "react";

export const useStorage = () => {
  const getTheme = () => localStorage.setItem("darkTheme");
  const sendTheme = () => localStorage.getItem("darkTheme");

  return [getTheme, sendTheme];
};
