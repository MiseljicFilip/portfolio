import {
  Box,
  TextField,
  Typography,
  Button,
  styled,
  withStyles,
  Card,
} from "@mui/material";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { CustomTextField } from "./CustomTextField";

const ContactForm = () => {
  const [userData, setUserData] = useState({
    userName: null,
    userEmail: null,
    message: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //
  };

  // const CustomTextFieldD = {};

  // const WithD = withStyles(CustomTextFieldD)(TextField);

  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
    marginTop: "1rem",
    marginLeft: "auto",
    borderRadius: "25px",
    "&:hover": {
      border: "3px solid white",
      backgroundColor: "transparent",
    },
    [theme.breakpoints.down("md")]: {
      width: "35%",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
    },
  }));

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID",
        "YOUR_TEMPLATE_ID",
        form.current,
        "YOUR_PUBLIC_KEY"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const handleUserDataChange = (event) =>
    setUserData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          maxWidth: 600,
          mx: "auto",
          p: 2,
          border: "2px solid  #00C7FF",
          borderRadius: "12px",
          boxShadow: 1,

          backgroundColor: "#000F2E",
        }}
      >
        <Typography variant="h4" align="center" mb={2} sx={{ color: "white" }}>
          Contact Me
        </Typography>
        <form onSubmit={sendEmail}>
          {/* <WithD
            fullWidth
            label="Name"
            value={userData.userName}
            name="userName"
            onChange={handleUserDataChange}
            margin="normal"
            required
          /> */}
          <CustomTextField
            fullWidth
            label="Name"
            value={userData.userName}
            name="userName"
            onChange={handleUserDataChange}
            margin="normal"
            required
          />
          <CustomTextField
            fullWidth
            label="Email"
            value={userData.userEmail}
            name="userEmail"
            onChange={handleUserDataChange}
            margin="normal"
            required
            type="email"
          />
          <CustomTextField
            fullWidth
            label="Message"
            value={userData.message}
            name="message"
            onChange={handleUserDataChange}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Box sx={{ display: "flex" }}>
            <CustomButton fullWidth type="submit">
              Submit
            </CustomButton>
          </Box>
        </form>
      </Card>
    </Box>
  );
};

export default ContactForm;
