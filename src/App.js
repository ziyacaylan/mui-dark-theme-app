import "./App.css";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeContextProvider } from "./context/ThemeContext";

import Navigation from "./components/Navigation";
import Container from "./components/Container";

function App() {
  return (
    <ThemeContextProvider>
      <CssBaseline />
      <Navigation />
      <Container />
    </ThemeContextProvider>
  );
}

export default App;
