import { Box, Button, styled, Typography } from "@mui/material";
import { Link } from "react-scroll";
import heroImage from "../media/selfiePortfolio.png";

import React from "react";

const Hero = () => {
  const CustomButton = styled(Button)(({ theme }) => ({
    border: "3px solid transparent",
    backgroundColor: "#00C7FF",
    color: "white",
    width: "20%",
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

  const CustomTitle = styled(Typography)(({ theme }) => ({
    color: "white",
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      fontSize: "3.5rem",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.5rem",
    },
  }));
  return (
    <Box sx={{ mt: 8, mb: 12, p: 2, maxWidth: "1200px", mx: "auto" }}>
      <Typography
        variant="h6"
        sx={{ color: "white", textAlign: "center", mb: 2 }}
      >
        Hello, I'm Filip
      </Typography>
      <CustomTitle variant="h1">
        I enjoy <span style={{ color: "rgba(0, 199,255,255)" }}> building</span>
        {""} and{" "}
        <span style={{ color: "rgba(0, 199,255,255)" }}>designing</span> for the
        web.
      </CustomTitle>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <Box
          component={"img"}
          sx={{
            height: 200,
            width: 200,
            mt: 4,
            mb: 4,
            borderRadius: "50%",
            border: "2px solid #00C7FF",
          }}
          src={heroImage}
        />
        <CustomButton>Contact me</CustomButton>
      </Box>
    </Box>
  );
};

export default Hero;
