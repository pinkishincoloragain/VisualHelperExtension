import { useState } from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";

export default function FilterBtn() {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Typography>Fish</Typography>
        <Switch
          checked={checked}
          onChange={handleChange}
          inputProps={{ "aria-label": "controlled" }}
        />
      </Box>
    </>
  );
}
