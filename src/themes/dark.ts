/* Dark theme colors
 * style definitions and site custom attribs
 * are defined in light.ts
*/
import { ThemeOptions } from "@mui/material";

export const darkTheme: ThemeOptions = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
            backgroundImage: 'linear-gradient(to right,  #031424, #000810)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
            backgroundImage: 'linear-gradient(to right,  #031424, #000810)',
            "&.grad": {
            backgroundImage: 'linear-gradient(to right,  #382003, #000810)',
            },
            "&.grad2": {
            backgroundImage: 'linear-gradient(to right,  #1a0315, #000810)',
            },
            "&.gradsite2":{
            backgroundImage: 'linear-gradient(to right,  #30415d, #000810)',
            },
        },
      },
    },
  },
  palette: {
    mode: "dark",
    site: {
      main: "#031424", // ultramarine
      contrastText: "#ffffff",
      },
    site2: {
      main: "#30415d", // indigo
      contrastText: "#ffffff",
      },
    hlight: {
      main: "#382003", // brown
      contrastText: "#ffffff",
      },
    hlight2: {
      main: "#1a0315", // deep plum
      contrastText: "#ffffff",
      },
    background: {
      paper: "#031424", // ultramarine
      default: "#000810", // dark navy
    },
  },
};
