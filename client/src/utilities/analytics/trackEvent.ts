import ReactGA from "react-ga";

const trackClick = (id: string): void => {
  ReactGA.event({
    category: id,
    action: "category / country click"
  });
};

export default trackClick;