/// <reference types="react" />
declare type TComponent = {
    mainNewsData: {
        description: string;
        publishedAt: string;
        source?: {
            name: string;
        };
        title: string;
        url: string;
        urlToImage: string;
    }[];
};
declare const MainNewsItems: ({ mainNewsData }: TComponent) => JSX.Element;
export default MainNewsItems;
