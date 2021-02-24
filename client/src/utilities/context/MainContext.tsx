import React, { createContext, ReactNode, useState } from "react";

type TMainContext = {
  countryCode: string
  setCountryCode: (value: string) => void
  categoryCode: string
  setCategoryCode: (value: string) => void
  metaTitle: string
  setMetaTitle: (value: string) => void
}

type TProvider = {
  children: ReactNode
}

export const MainContext = createContext<TMainContext>({} as TMainContext);

export const MainContextProvider = ({ children }: TProvider) => {
  const [countryCode, setCountryCode] = useState("gb");
  const [categoryCode, setCategoryCode] = useState("general");
  const [metaTitle, setMetaTitle] = useState("British");

  return (
    <MainContext.Provider value={{ countryCode, setCountryCode, categoryCode, setCategoryCode, metaTitle, setMetaTitle }}>
      {children}
    </MainContext.Provider>
  );
};