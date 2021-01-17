/// <reference types="react" />
declare type TComponent = {
    sideNewsdata: {
        description: string;
        publishedAt: string;
        source?: {
            name: string;
        };
        title: string;
        url: string;
    }[];
};
declare const SideNewsItems: ({ sideNewsdata }: TComponent) => JSX.Element;
export default SideNewsItems;
