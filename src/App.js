import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';
import UserList from './Components/UserList'; // Importing UserList component
import theme from './Components/theme'; // Importing theme component

function App() {
  return (
    // Applying the theme to the entire app
    <ThemeProvider theme={theme}>
      <div>
         {/* AppBar component */}
        <AppBar position="static" color="primary">
           {/* Toolbar contains title inside it: User List*/}
          <Toolbar>
            <Typography variant="h5">
              User List
            </Typography>
          </Toolbar>
        </AppBar>

        {/* Container to hold the UserList component */}
        <Container sx={{ marginTop: 2 }}>
          {/* Rendering the UserList component */}
          <UserList />
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
