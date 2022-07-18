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
  palette: {
    mode: "light",
    site: {
      main: "#f2eee2", // beige
      contrastText: "#000000",
      },
    site2: {
      main: "#f7c331", // leather
      contrastText: "#000000",
      },
    hlight: {
      main: "#cae4db", // morning sky
      contrastText: "#000000",
      },
    hlight2: {
      main: "#e37222", // tangerine
      contrastText: "#000000",
      },
    background: {
      paper: "#f2eee2", // beige
      default: "#f5f5f5",  // eggshell
    },
  },
};
