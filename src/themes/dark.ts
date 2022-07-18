/* Dark theme colors
 * style definitions and site custom attribs
 * are defined in light.ts
*/
import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  palette: {
    mode: "dark",
    site: {
      main: "#031424", // ultramarine
      contrastText: "#ffffff",
      },
    site2: {
      main: "#1a0315", // deep plum
      contrastText: "#ffffff",
      },
    hlight: {
      main: "#382003", // brown
      contrastText: "#ffffff",
      },
    hlight2: {
      main: "#30415d", // indigo
      contrastText: "#ffffff",
      },
    background: {
      paper: "#031424", // ultramarine
      default: "#000810", // dark navy
    },
  },
};
