import { createTheme } from '@mui/material/styles';

// Create a theme instance
const theme = createTheme({
  palette: {
    primary: {
      main: '#1976D2', // Change this to your preferred primary color
    },
    secondary: {
      main: '#F50057', // Change this to your preferred secondary color
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif', // Change this to your preferred font
  },
});

export default theme;
