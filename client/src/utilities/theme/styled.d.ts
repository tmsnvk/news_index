import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      grayDark: string;
      grayLight: string;
      greenDark: string;
      orangeDark: string;
    };
    fontFamily: {
      main: string;
    };
    fontSize: {
      default: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      xxLarge: string;
    };
    mediaQuery: {
      xSmall: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
    };
  }
}