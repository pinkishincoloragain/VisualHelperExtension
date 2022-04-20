import { Box, Button } from "@mui/material";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <Box
      className="App"
      sx={{
        width: "400px",
        height: "500px",
        px: "20px",
        py: "20px",
        backgroundColor: theme === "light" ? "white" : "black",
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
        <Button
          style={{
            width: "100px",
            heigth: "20px",
            backgroundColor: theme === "light" ? "black" : "white",
          }}
        >
          fish
        </Button>
        <ThemeBtn theme={theme} setTheme={setTheme} />
      </Box>
    </Box>
  );
}

export default App;
