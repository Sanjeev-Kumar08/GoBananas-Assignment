import React, { useState, useEffect } from 'react';
import { TextField, Container, List, ListItem, ListItemText, CircularProgress, Typography } from '@mui/material';

const UserList = () => {

  // State variables for managing data (fetched from API), filtered users, search query, and loading status
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  // fetch data from the API when the component mounts
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Set fetched data to users data and filtered users
        setUsers(data); 
        setFilteredUsers(data);
        setLoading(false); // Set loading status to false after data fetching is complete
      })
      .catch(error => {
        // Handle Error if one encounters during fetching the data
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  // Filter users based on search query as it changes
  useEffect(() => {
    setFilteredUsers(
      // Convert the search query and the name of user to lowercase to avoid case sensitive issues
      users.filter(user => 
        user.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search , users]);


  return (
    <Container>
      {/* Input Text Field */}
      <TextField
        label="Search User By Name"
        variant="outlined"
        fullWidth
        margin="normal"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        sx={{ marginBottom: 2 }}
      />
     {/* Show circular progress indicator while data is being fetched from the API*/}
      {loading ? <CircularProgress /> : (
        <List>
          {/* Display list of filtered users */}
          {filteredUsers.map(user => (
            <ListItem key={user.id} alignItems="flex-start">
              
              <ListItemText
              // Display User Name
                primary={
                  <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                      style={{ fontWeight: 'bold' }}
                    >
                      {user.name}
                    </Typography>
                }
                // Display user's details (username, email, and address)
                secondary={
                  <>
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Username: {user.username}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Email: {user.email}
                    </Typography>
                    <br />
                    <Typography
                      component="span"
                      variant="body2"
                      color="textPrimary"
                    >
                      Address: {`${user.address.suite}, ${user.address.street}, ${user.address.city}`}
                    </Typography>
                  </>
                }
                sx={{ marginBottom: 2 }}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Container>
  );
};

export default UserList;
