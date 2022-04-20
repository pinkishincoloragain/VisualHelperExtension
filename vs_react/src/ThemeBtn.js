import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";

const ThemeBtn = ({ theme, setTheme }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setTheme(event.target.checked ? "dark" : "light");
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
        mt: "20px",
      }}
    >
      <Typography
        variant="h5"
        sx={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        fish
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
