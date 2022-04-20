import Checkbox from "@mui/material/Checkbox";
import { useState } from "react";

const ThemeBtn = ({ theme, setTheme }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (event) => {
    setChecked(event.target.checked);
    setTheme(event.target.checked ? "dark" : "light");
  };

  return (
    <Checkbox
      checked={checked}
      onChange={handleChange}
      inputProps={{ "aria-label": "primary checkbox" }}
    />
  );
};

export default ThemeBtn;
