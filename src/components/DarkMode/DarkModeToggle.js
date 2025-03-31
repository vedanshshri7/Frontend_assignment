import React from "react";
import { IconButton } from "@mui/material";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { useDarkMode } from "../DarkMode/DarkModeContext";

const DarkModeToggle = () => {
  const { darkMode, setDarkMode } = useDarkMode();

  return (
    <IconButton onClick={() => setDarkMode(!darkMode)} color="inherit">
      {darkMode ? <LightModeIcon sx={{fontSize: '1.8rem'}} /> : <DarkModeIcon sx={{fontSize: '1.8rem'}}/>}
    </IconButton>
  );
};

export default DarkModeToggle;
