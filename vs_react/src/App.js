import { Box, Button } from "@mui/material";
import { useState } from "react";
import ThemeBtn from "./ThemeBtn";
import FilterBtn from "./FilterBtn";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { purple } from "@mui/material/colors";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1476A3",
    },
    secondary: {
      main: "#292977",
    },
    dark: {
      main: purple,
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: "12px",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "8px",
        },
      },
    },
  },
});

function App() {
  const [darkMode, setDarkMode] = useState("light");

  return (
    <ThemeProvider theme={theme}>
      <Box
        className="App"
        sx={{
          width: "400px",
          height: "500px",
          px: "20px",
          py: "20px",
          backgroundColor: darkMode === "light" ? "white" : "black",
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
              width: "200px",
              // heigth: "60px",
              backgroundColor: darkMode === "light" ? "black" : "white",
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
          <FilterBtn theme={darkMode} />
          <ThemeBtn theme={darkMode} setTheme={setDarkMode} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
