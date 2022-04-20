import { Box, Button } from "@mui/material";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import FilterBtn from "./FilterBtn";

function App() {
  return (
    <Box
      className="App"
      sx={{
        width: "400px",
        height: "200px",
        px: "20px",
        py: "20px",
        backgroundColor: "white",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          border: "5px solid black",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <FilterBtn />

          <Button
            style={{
              width: "200px",
              // heigth: "60px",
              backgroundColor: "black",
              color: "white",
            }}
            onClick={() => {
              window.open(
                "https://www.github.com/pinkishincoloragain",
                "_blank"
              );
            }}
          >
            Configure filter
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default App;
