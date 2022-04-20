import * as React from "react";
import { styled } from "@mui/material/styles";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const BpIcon = styled("span")(() => ({
  borderRadius: "50%",
  width: 16,
  height: 16,
}));

const BpCheckedIcon = styled(BpIcon)({
  backgroundColor: "#137cbd",
  backgroundImage:
    "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
  "&:before": {
    display: "block",
    width: 16,
    height: 16,
    backgroundImage: "radial-gradient(#fff,#fff 28%,transparent 32%)",
    content: '""',
  },
  "input:hover ~ &": {
    backgroundColor: "#106ba3",
  },
});

// Inspired by blueprintjs
function BpRadio(props) {
  return (
    <Radio
      sx={{
        "&:hover": {
          bgcolor: "transparent",
        },
      }}
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}

const FilterBtn = (darkMode) => {
  return (
    <FormControl
      sx={{
        ml: "0",
        my: "10px",
        color: darkMode ? "black" : "white",
      }}
    >
      <FormLabel id="demo-customized-radios">Filter</FormLabel>
      <RadioGroup
        defaultValue="female"
        aria-labelledby="demo-customized-radios"
        name="customized-radios"
      >
        <FormControlLabel value="female" control={<BpRadio />} label="Female" />
        <FormControlLabel value="male" control={<BpRadio />} label="Male" />
        <FormControlLabel value="other" control={<BpRadio />} label="Other" />
        <FormControlLabel
          value="disabled"
          disabled
          control={<BpRadio />}
          label="(Configure filter)"
        />
      </RadioGroup>
    </FormControl>
  );
};

export default FilterBtn;
