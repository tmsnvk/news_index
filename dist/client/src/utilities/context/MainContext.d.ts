import React, { ReactNode } from "react";
declare type TMainContext = {
    country: string;
    setCountry: (value: string) => void;
    category: string;
    setCategory: (value: string) => void;
    pageTitle: string;
    setPageTitle: (value: string) => void;
    titleCategory: string;
    setTitleCategory: (value: string) => void;
};
declare type TProvider = {
    children: ReactNode;
};
export declare const MainContext: React.Context<TMainContext>;
export declare const MainContextProvider: ({ children }: TProvider) => JSX.Element;
export {};
