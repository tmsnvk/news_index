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

type TSessionStorage = {
  countryCode: string;
  categoryCode: string;
}

const MainPage = () => {
  const { countryCode, categoryCode, metaTitle, setCountryCode, setCategoryCode } = useContext(MainContext);

  // local states for storing the server response data.
  const [mainNewsData, setMainNewsData] = useState<TData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<TData | []>([]);

  // [isLoading, setIsLoading] - handling loading message while data loads from the server.
  // [isError, setIsError] - handling error catching and error message.
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  // in case of a page refresh, the country/category codes saved in sessionstorage guarantee that the viewed page stays the same.
  useEffect(() => {
    if (sessionStorage.getItem("navCode") !== null) {
      const getNavCode: TSessionStorage = JSON.parse(sessionStorage.getItem("navCode") as string);

      setCountryCode(getNavCode.countryCode);
      setCategoryCode(getNavCode.categoryCode);
    }
  }, []);

  // fetching data from the external API via the server code.
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await axiosConfig.get<TData>(`/data/${countryCode}/${categoryCode}`);

        // the free tier API serves 100 requests per day; when maxed out, the request is still successful and won't throw an error w/o this line.
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