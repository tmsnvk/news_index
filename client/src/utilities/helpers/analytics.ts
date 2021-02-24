import { useEffect } from "react";
import ReactGA from "react-ga";
import analyticsConfig from "utilities/config/analyticsConfig";

// initiates google analytics tracking.
export const usePageTracking = (pageName: string): void => {
  useEffect(() => {
    ReactGA.initialize(analyticsConfig.apiKey);

    const logPageview = (pageName: string): void => ReactGA.pageview(pageName);
    logPageview(pageName);
  }, [pageName]);
};

// tracks user activity based on the user's country / category clicks.
export const trackClick = (id: string): void => {
  ReactGA.event({
    category: id,
    action: "category / country click"
  });
};