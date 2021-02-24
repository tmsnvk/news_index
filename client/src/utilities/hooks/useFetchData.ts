import { useContext } from "react";
import { useQuery } from "react-query";
import axiosConfig from "utilities/config/axiosConfig";
import { MainContext } from "utilities/context/MainContext";

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

type TFetchData = {
  countryCode: string
  categoryCode: string
}

// react-query function.
const fetchData = async ({ countryCode, categoryCode }: TFetchData): Promise<TData> => {
  const { data } = await axiosConfig.get<TData>(`/data/${countryCode}/${categoryCode}`);

  return data;
};

// react-query custom hook.
const useFetchData = () => {
  const { countryCode, categoryCode } = useContext(MainContext);

  return useQuery([ "newsitems", { countryCode, categoryCode }], () => fetchData({ countryCode, categoryCode }));
};

export default useFetchData;