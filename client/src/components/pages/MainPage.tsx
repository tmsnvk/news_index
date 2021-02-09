import React, { useContext, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import axios from "axios";
import { BACKEND_URL } from "utilities/constants/urls";
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
  const { country, category, pageTitle, titleCategory } = useContext(MainContext);

  const [mainNewsData, setMainNewsData] = useState<TData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<TData | []>([]);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        setIsLoading(true);
        const { data } = await axios.get<TData>(`${BACKEND_URL}/data/${country}/${category}`, {
          headers: { "Content-Type": "application/json" },
          timeout: 10000
        });

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
  }, [country, category]);

  return (
    <>
      <Helmet>
        <title>{`${pageTitle} ${titleCategory} news`}</title>
      </Helmet>
      {isError ? <ErrorMessage /> : null}
      {!isError && isLoading ? <LoadingMessage /> : <><MainNewsItems mainNewsData={mainNewsData} /><SideNewsItems sideNewsdata={sideNewsdata} /></>}
    </>
  );
};

export default MainPage;