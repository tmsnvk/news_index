import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { MainContext } from "utilities/context/MainContext";
import { MainNewsItems, SideNewsItems } from "components/main";
import { ErrorMessage, LoadingMessage } from "components/shared/utilities";
import useFetchData from "utilities/hooks/useFetchData";

type TData = {
  description: string
  publishedAt: string
  source?: {
    name: string
  }
  title: string
  url: string
  urlToImage: string
}[]

type TSessionStorage = {
  countryCode: string
  categoryCode: string
}

const MainPage = () => {
  const { categoryCode, metaTitle, setCountryCode, setCategoryCode } = useContext(MainContext);

  // react-query setup.
  const { isLoading, isError, data } = useFetchData();

  // local states for storing the data retrieved with react-query.
  const [mainNewsData, setMainNewsData] = useState<TData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<TData | []>([]);

  // in case of a page refresh, the country/category codes saved in sessionstorage guarantee that the viewed page stays the same.
  useEffect(() => {
    if (sessionStorage.getItem("navCode") !== null) {
      const getNavCode: TSessionStorage = JSON.parse(sessionStorage.getItem("navCode") as string);

      setCountryCode(getNavCode.countryCode);
      setCategoryCode(getNavCode.categoryCode);
    }
  }, []);

  // slicing the react-query data into two parts.
  useEffect(() => {
    if (data !== undefined) {
      setMainNewsData(data.slice(0, 3));
      setSideNewsData(data.slice(3, 15));
    }
  }, [data]);

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