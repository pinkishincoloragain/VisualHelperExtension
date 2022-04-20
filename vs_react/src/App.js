import { Box, Button } from "@mui/material";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import FilterBtn from "./FilterBtn";

function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <Box
      className="App"
      sx={{
        width: "400px",
        height: "500px",
        px: "20px",
        py: "20px",
        backgroundColor: darkMode === false ? "white" : "black",
      }}
    >
      <Box
        sx={{
          borderRadius: "10px",
          border: "1px double white",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <Button
            style={{
              width: "200px",
              // heigth: "60px",
              backgroundColor: darkMode === false ? "black" : "white",
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
          <FilterBtn darkMode={darkMode} />
          <ThemeBtn darkMode={darkMode} setDarkMode={setDarkMode} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
