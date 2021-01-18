import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MainContext } from "utilities/context/MainContext";
import { MainNewsItems, SideNewsItems } from "components/main";
import { ErrorMessage, LoadingMessage } from "components/shared/utilities";

type TData = {
  description: string;
  publishedAt: string;
  source?: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}[]

const MainPage = () => {
  const { country, category } = useContext(MainContext);

  const [mainNewsData, setMainNewsData] = useState<TData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<TData | []>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<TData>(`https://newsindex.herokuapp.com/data/${country}/${category}`,{ 
          headers: { "Content-Type": "application/json" },
          timeout: 10000
        });

        setMainNewsData(data.slice(0, 3)); 
        setSideNewsData(data.slice(3, 15));
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        setIsError(true);
        return console.log(`===> The error is - ${error} <===`);
      }
    };

    fetchData();
    return () => {
      setMainNewsData([]);
      setSideNewsData([]);
      setIsLoading(false);
      setIsError(false);
    }
  }, [country, category]);

  return (
    <>
      {isError ? <ErrorMessage /> : null}
      {!isError && isLoading ? <LoadingMessage /> : <><MainNewsItems mainNewsData={mainNewsData} /><SideNewsItems sideNewsdata={sideNewsdata} /></>}
    </>
  );
};

export default MainPage;