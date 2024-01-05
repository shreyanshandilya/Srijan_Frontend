import React, { useState, Fragment, useNavigate, useEffect } from "react";
import { styled } from "@mui/joy/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Nav from "../Navbar/navbar";
import ProfilePage from "./profile";
const InputDefault = styled(TextField)(({ theme }) => ({
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "#FFD700", // Adjusted for yellowish color (hex code for gold)
    },
    "&:hover fieldset": {
      borderColor: "#FFD700", // Adjusted for yellowish color (hex code for gold)
    },
    "&.Mui-focused fieldset": {
      borderColor: "#FFD700", // Adjusted for yellowish color (hex code for gold)
    },
  },
  "& input": {
    color: "#FFFFFF", // Set to white (hex code for white)
  },
  "& label.Mui-focused": {
    color: "#FFFFFF", // Set to white (hex code for white)
  },
  "& .MuiInputLabel-root.Mui-focused": {
    color: "#FFFFFF", // Set to white (hex code for white)
  },
  "& .MuiInputBase-input::placeholder": {
    color: "#FFFFFF", // Set to white (hex code for white)
  },
  "& .MuiInputLabel-root": {
    color: "#FFFFFF", // Set to white (hex code for white)
  },
}));

const Dashboard = () => {
  const [listItem, setListItem] = React.useState([]);
  const [Email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedEmail = localStorage.getItem("email");
    const storedPhoneNumber = localStorage.getItem("phoneNumber");

    if (storedEmail) {
      setEmail(storedEmail);
    }

    if (storedPhoneNumber) {
      setPhoneNumber(storedPhoneNumber);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("email", Email);
  }, [Email]);
  
  useEffect(() => {
    localStorage.setItem("phoneNumber", phoneNumber);
  }, [phoneNumber]);
  
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  
  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };
  
  const clearLocalStorage = ()=> {
    localStorage.setItem("email", "");
    localStorage.setItem("phoneNumber" ,"");
    setEmail("");
    setPhoneNumber("");
    alert("user Logout" );
  }

  async function onSubmit(e) {
    e.preventDefault();
    let response;
    try {
      response = await fetch(
        `https://srijan2024.onrender.com/api/getOrder/${phoneNumber}`,
        {
          method: "POST",
        }
      );

      if (!response.ok) {
        throw new Error("Error occurred. Please try again later.");
      }

      let responseData = await response.json();
      setIsLoggedIn(true);
      console.log(responseData);
      setListItem(responseData);
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  }

  return listItem.length ? (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        alignItems: "center",
        overflowY: "hidden",
      }}
    >
      <Nav />
      {listItem.map((item) => (
        <ProfilePage data={item} />
      ))}
    </div>
  ) : (
    <Fragment>
      <div style={{ background: "black", height: "100vh" }}>
        <Nav />
        <Container
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "100px",
            color: "white",
          }}
        >
          <div>
            <Typography className="mb-3">
              Enter your email id and phone no.
            </Typography>
            <form onSubmit={onSubmit} className="bold-form">
              <div className="mb-5 mt-5">
                <InputDefault
                  placeholder="XYZ"
                  label="Email"
                  className="form-control"
                  name="email"
                  value={Email}
                  onChange={handleEmailChange}
                  required
                />
              </div>

              <div className="mb-5 text-white">
                <InputDefault
                  placeholder="9834XXXX23"
                  label="Phone No."
                  type="number"
                  className="form-control"
                  name="number"
                  value={phoneNumber}
                  onChange={handlePhoneNumberChange}
                  required
                />
              </div>

              <Button
                type="submit"
                variant="outlined"
                color="primary"
                size="large"
              >
                Submit
              </Button>

              {isLoggedIn && (
                <Button
                  type="submit"
                  variant="outlined"
                  color="primary"
                  size="large"
                  onClick={clearLocalStorage}
                >
                  Logout
                </Button>
              )}
            </form>
          </div>
        </Container>{" "}
      </div>
    </Fragment>
  );
};

export default Dashboard;
