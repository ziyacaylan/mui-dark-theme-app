import { createTheme, ThemeProvider } from "@mui/material";
import { amber, grey } from "@mui/material/colors";
import { createContext, useMemo, useState, useContext } from "react";

const ThemeContext = createContext({
  toggleMode: () => {},
  mode: "light",
});

export const ThemeContextProvider = ({ children }) => {
  const [mode, setMode] = useState("light");

  const colorMode = useMemo(
    () => ({
      toggleMode: () =>
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light")),
      mode,
    }),
    [mode]
  );
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          ...(mode === "light"
            ? {
                // palette values for light mode
                // primary: amber,
                divider: amber[200],
                text: {
                  primary: grey[900],
                  secondary: grey[800],
                },
                background: {
                  default: grey[200],
                  paper: grey[900],
                },
              }
            : {
                // palette values for dark mode
                primary: grey,
                divider: grey[700],
                background: {
                  default: grey[900],
                  paper: grey[900],
                },
                text: {
                  primary: "#fff",
                  secondary: grey[500],
                },
              }),
        },
      }),
    [mode]
  );
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

export const useThemeContext = () => useContext(ThemeContext);
