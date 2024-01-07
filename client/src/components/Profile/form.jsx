import React, { useState, Fragment, useNavigate, useEffect } from "react";
import { styled } from "@mui/joy/styles";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Nav from "../Navbar/navbar";
import { motion } from "framer-motion";
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

  const clearLocalStorage = () => {
    localStorage.setItem("email", "");
    localStorage.setItem("phoneNumber", "");
    setEmail("");
    setPhoneNumber("");
    alert("user Logout");
  };

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
      className="bg-[#040d10]"
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
          <div className="my-10 text-3xl text-[#dad3a5] font-semibold">
            <motion.h2
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              Enter your details
            </motion.h2>
            {/* <form onSubmit={onSubmit} className="bold-form">
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
            </form> */}
          </div>
        </Container>{" "}
        <motion.form
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          onSubmit={(e) => onSubmit(e)}
          className="max-w-sm mx-auto rounded-lg bg-[#dad3a5] flex-col justify-center shadow-xl px-5 py-5 backdrop-blur-lg"
        >
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-[#040d10]"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              className="bg-gray-50 border border-gray-300 text-[#040d10] text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="xyz@gmail.com"
              label="Email"
              name="email"
              value={Email}
              onChange={handleEmailChange}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block mb-2 text-sm font-medium text-[#040d10]"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#0d0c06] focus:border-[#0d0c06] block w-full p-2.5"
              placeholder="9834XXXX23"
              label="Phone Number"
              name="number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              required
            />
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            type="submit"
            className="text-[#efede0] bg-[#514c08]/60 hover:bg-[#efede0] hover:text-[#514c08] focus:ring-2 focus:outline-none focus:ring-[#514c08] font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center "
          >
            Submit
          </motion.button>
        </motion.form>
      </div>
    </Fragment>
  );
};

export default Dashboard;
