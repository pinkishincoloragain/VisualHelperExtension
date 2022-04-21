import { useState } from "react";
import Switch from "@mui/material/Switch";
import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function FilterBtn(props) {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setChecked(!checked);
    props.setFilterOn(!checked);
  };

  const MaterialUISwitch = styled(Switch)(({ theme }) => ({
    width: 80,
    height: 40,
    padding: 0,
    borderRadius: "60px",
    "& .MuiSwitch-switchBase": {
      margin: 0,
      paddingTop: 5,
      "&.Mui-checked": {
        color: "#fff",
        transform: "translateX(35px)",
      },
    },
    "& .MuiSwitch-thumb": {
      height: "30px",
      width: "30px",
    },
  }));

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <FormControlLabel
          control={<MaterialUISwitch sx={{ m: 1 }} />}
          label={checked ? "Filter on" : "Filter off"}
          onClick={handleChange}
          checked={checked}
        />
      </Box>
    </>
  );
}
