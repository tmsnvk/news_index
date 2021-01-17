/// <reference types="react" />
declare type TComponent = {
    publishedAt: string;
    source?: {
        name: string;
    };
};
declare const ItemPublishedContainer: ({ publishedAt, source }: TComponent) => JSX.Element;
export default ItemPublishedContainer;
