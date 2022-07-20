import { ThemeOptions } from "@mui/material";

declare module '@mui/material/styles' {
  interface Palette {
    site: Palette['primary'];
    site2: Palette['primary'];
    hlight: Palette['primary'];
    hlight2: Palette['primary'];
  }
  interface PaletteOptions {
    site: PaletteOptions['primary'];
    site2: PaletteOptions['primary'];
    hlight: PaletteOptions['primary'];
    hlight2: PaletteOptions['primary'];
  }
}
export const lightTheme: ThemeOptions = {
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
            backgroundImage: 'linear-gradient(to right,  #f2eee2, #f5f5f5)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
            backgroundImage: 'linear-gradient(to right,  #f2eee2, #f5f5f5)',
            "&.grad":{
            backgroundImage: 'linear-gradient(to right,  #B0E0E6, #f5f5f5)',
            },
            "&.grad2":{
            backgroundImage: 'linear-gradient(to right,  #acca65, #f5f5f5)',
            },
            "&.gradsite2":{
            backgroundImage: 'linear-gradient(to right,  #f5ce28, #f5f5f5)',
            },
        },
      },
    },
  },
  palette: {
    mode: "light",
    site: {
      main: "#f2eee2", // beige
      contrastText: "#000000",
      },
    site2: {
      main: "#f5ce28", // leather
      // main: "#f7c331", // leather
      contrastText: "#000000",
      },
    hlight: {
      main: "#b0e0e6", // morning sky
      // main: "#cae4db", // morning sky
      contrastText: "#000000",
      },
    hlight2: {
      main: "#acca65", // green
      contrastText: "#000000",
      },
    background: {
      paper: "#f2eee2", // beige
      default: "#f5f5f5",  // eggshell
    },
  },
};
