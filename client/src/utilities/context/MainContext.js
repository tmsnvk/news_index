import React, { createContext, useState } from "react";

export const MainContext = createContext();

export const MainContextProvider = ({ children }) => {
  const [country, setCountry] = useState("gb");
  const [category, setCategory] = useState("general");
  const [pageTitle, setPageTitle] = useState("British");
  const [titleCategory, setTitleCategory] = useState("general");

  return (
    <MainContext.Provider value={{ country, setCountry, category, setCategory, pageTitle, setPageTitle, titleCategory, setTitleCategory }}>
      {children}
    </MainContext.Provider>
  );
};