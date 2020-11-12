import React, { createContext, ReactNode, useState } from "react";

type MainContext = {
  country: string;
  setCountry: (value: string) => void;
  category: string;
  setCategory: (value: string) => void;
  pageTitle: string;
  setPageTitle: (value: string) => void;
  titleCategory: string;
  setTitleCategory: (value: string) => void;
}

type Props = {
  children: ReactNode;
}

export const MainContext = createContext<MainContext>(undefined!);

export const MainContextProvider = ({ children }: Props) => {
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