import { ReactElement } from "react";
declare type TComponent = {
    message: string | ReactElement;
};
declare const Message: ({ message }: TComponent) => JSX.Element;
export default Message;
