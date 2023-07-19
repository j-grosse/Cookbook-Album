import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#799351', // Change this to your desired secondary color
    },
    secondary: {
      main: '#F6EEC9', // Change this to your desired primary color
    },
    tertiary: {
      main: '#FFA36C', // Change this to your desired secondary color
    },
    quartary: {
      main: '#A20A0A', // Change this to your desired secondary color
    },
    background: {
      default: '#799351', // Set the default background color
      paper: '#F6EEC9',
    },

    // // Add your custom colors to the palette
    // customColor1: {
    //   main: '#dc3545', // Change this to your desired custom color
    // },
    // customColor2: {
    //   main: '#28a745', // Change this to your desired custom color
    // },
    // customColor3: {
    //   main: '#ffc107', // Change this to your desired custom color
    // },
    // customColor4: {
    //   main: '#17a2b8', // Change this to your desired custom color
    // },
  },
});

export default theme;
