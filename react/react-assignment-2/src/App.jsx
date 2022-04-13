import { useContext } from "react";
import Container from "./components/Container";
import Forecasts from "./components/Forecasts";
import Header from "./components/Header";
import Cards from "./components/Header";
import CityContext, { CityProvider } from "./context/CityContext";
import ThemeContext, { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <div className={`col-sm-10 offset-sm-1 text-center`}>
      <ThemeProvider>
        <CityProvider>
          <Container />
        </CityProvider>
      </ThemeProvider>
    </div>
  );
}

export default App;
