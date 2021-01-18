import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

const useAnalyticsTracking = (): void => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(process.env.REACT_APP_GA_KEY as string);
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
};

export default useAnalyticsTracking;