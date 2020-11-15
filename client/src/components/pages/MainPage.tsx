import React, { FunctionComponent, useContext, useEffect, useState } from "react";
import { MainContext } from "utilities/context/MainContext";
import { MainNewsItems, SideNewsItems } from "components/components-main";
import axios from "axios";

type NewsData = {
  description: string;
  publishedAt: string;
  source?: {
    name: string;
  };
  title: string;
  url: string;
  urlToImage: string;
}[]

const MainPage: FunctionComponent = () => {
  const { country, category } = useContext(MainContext);

  const [mainNewsData, setMainNewsData] = useState<NewsData | []>([]);
  const [sideNewsdata, setSideNewsData] = useState<NewsData | []>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<NewsData>(`/country/${country}/category/${category}`, { headers: { "Content-Type": "application/json" }});        
        setMainNewsData(data.slice(0, 3)); 
        setSideNewsData(data.slice(3, 15));
      } catch (error) {
        return console.log(`Data fetch has failed. Please see the following error message - ${error}`);
      }
    };

    fetchData();
    return () => {
      setMainNewsData([]);
      setSideNewsData([]);
    }
  }, [country, category]);

  return (
    <>
      <MainNewsItems mainNewsData={mainNewsData} />
      <SideNewsItems sideNewsdata={sideNewsdata} />
    </>
  );
};

export default MainPage;