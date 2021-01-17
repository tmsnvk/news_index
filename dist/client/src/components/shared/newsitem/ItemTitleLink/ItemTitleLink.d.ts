/// <reference types="react" />
declare type TComponent = {
    title: string;
    url: string;
};
declare const ItemTitleLink: ({ title, url }: TComponent) => JSX.Element;
export default ItemTitleLink;
