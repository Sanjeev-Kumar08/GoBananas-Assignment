import { createTheme } from '@mui/material/styles';

// Creating a custom theme for the app using Material-UI's createTheme function

const theme = createTheme({
  // Palette for primary and secondary colors
  palette: {
    primary: {
      main: '#1976d2', // Blue color
    },
    secondary: {
      main: '#ff5722', // Orange color
    },
  },
  // Typography configuration for Customizing text styles
  typography: {
    
    h5: {
      fontWeight: 700, 
      fontSize: '1.5rem', 
      color: '#fff',
    },
    
    body2: {
      fontSize: '1rem', 
    },
  },
});

export default theme;
