import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { MainContext } from "utilities/context/MainContext";
import { MainNewsItems, SideNewsItems } from "components/main";

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get<TData>(`/data/country/${country}/category/${category}`, { headers: { "Content-Type": "application/json" }});
        setMainNewsData(data.slice(0, 3)); 
        setSideNewsData(data.slice(3, 15));
      } catch (error) {
        return console.log(`===> Data fetch has failed. The error message is - ${error} <===`);
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