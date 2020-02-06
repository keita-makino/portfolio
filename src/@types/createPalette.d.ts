import * as createPalette from '@material-ui/core/colors/common';

declare module '@material-ui/core/colors/common' {
  export interface CommonColors {
    black: string;
    white: string;
    primary?: string;
    secondary?: string;
  }

  declare const common: CommonColors;
  export default common;
}
