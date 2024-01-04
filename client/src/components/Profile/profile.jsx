import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Nav from '../Navbar/navbar';

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(91 91 44)', // Darker color
    },
    text: {
      primary: '#fff', // Text color
      secondary: '#ffd700', // Yellow color
    },
  },
});

const styles = {
  mainContainer: {
    background: ' ', // Gradient background
     // Ensure the container takes the full height
    padding: theme.spacing(3),
    backdropFilter: 'blur(10px)', // Blurriness effect
  },
  root: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.text.primary,
    borderRadius: 10,
    maxWidth: 500,
    minWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing(10),
    marginBottom: theme.spacing(7), // Increased margin
  },
  title: {
    fontSize: '1rem', // Smaller font size for titles
    marginBottom: theme.spacing(1), // Increased space between title and value
    color: theme.palette.text.secondary, // Yellow color
  },
  value: {
    fontSize: '1.2rem', // Larger font size for values
  },
};

const ProfilePage = ({ data }) => {
  const {
    admissionNumber,
    hostel,
    roomNumber,
    tshirtSize,
    mobileNumber,
    name,
    approved,
    createdAt,
    updatedAt,
    imageURL,
  } = data;

  return (
    <div style={styles.mainContainer}>
      
      <ThemeProvider theme={theme}>
        <Paper style={styles.root} elevation={3}>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            Admission Number:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {admissionNumber}
          </Typography>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            Hostel:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {hostel}
          </Typography>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            Room Number:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {roomNumber}
          </Typography>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            T-shirt Size:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {tshirtSize}
          </Typography>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            Mobile Number:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {mobileNumber}
          </Typography>
          <Typography style={styles.title} variant="subtitle2" gutterBottom>
            Verification:
          </Typography>
          <Typography style={styles.value} variant="h5" gutterBottom>
            {approved?"Approoved":"Pending"}
          </Typography>
          {/* Include other details as needed */}
        </Paper>
      </ThemeProvider>
    </div>
  );
};

export default ProfilePage;
