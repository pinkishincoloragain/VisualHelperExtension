import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ThemeBtn = ({ darkMode, setDarkMode }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setDarkMode(event.target.checked ? true : false);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        width: "200px",
        height: "40px",
        my: "10px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: darkMode === false ? "black" : "white",
        }}
      >
        Dark mode
      </Typography>
      <Checkbox
        checked={checked}
        onChange={handleChange}
        inputProps={{ "aria-label": "primary checkbox" }}
      />
    </Box>
  );
};

export default ThemeBtn;
