import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axiosConfig from "utilities/config/axiosConfig";
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
}[];

// @description - renders <MainPage /> element.
const MainPage = () => {  
  // @description - context elements.
  const { countryCode, categoryCode, metaTitle } = useContext(MainContext);

  // @description - local states for storing the data received from the server query.
  const [mainNewsData, setMainNewsData] = useState<TData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<TData | []>([]);

  // @description - [isLoading, setIsLoading] - handling loading message while data loads from the server.
  // @description - [isError, setIsError] - handling error catching and error message.
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await axiosConfig.get<TData>(`/data/${countryCode}/${categoryCode}`);

        // @description - the API currently serves 100 requests per day; when maxed out, the request is still successful and won't throw an error w/o this line.
        if (!data) throw setIsError(true);

        setMainNewsData(data.slice(0, 3));
        setSideNewsData(data.slice(3, 15));
        setTimeout(() => setIsLoading(false), 500);
      } catch (error) {
        setIsError(true);
        return console.error(`===> The error is - ${error} <===`);
      }
    };

    fetchData();
  }, [countryCode, categoryCode]);

  return (
    <>
      <Helmet>
        <title>{`${metaTitle} ${categoryCode} news`}</title>
      </Helmet>
      {isError ? (<ErrorMessage />) : (null)}
      {!isError && isLoading ? (<LoadingMessage />) : (<><MainNewsItems mainNewsData={mainNewsData} /><SideNewsItems sideNewsdata={sideNewsdata} /></>)}
    </>
  );
};

export default MainPage;