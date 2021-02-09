import { useEffect } from "react";
import ReactGA from "react-ga";

export const usePageTracking = (pageName: string) => {
  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY as string);

    const logPageview = (pageName: string) => ReactGA.pageview(pageName);
    logPageview(pageName);
  }, [pageName]);
};

export const trackClick = (id: string): void => {
  ReactGA.event({
    category: id,
    action: "category / country click"
  });
};