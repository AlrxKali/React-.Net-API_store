import { ThemeProvider } from "@emotion/react";
import { Container, createTheme, CssBaseline } from "@mui/material";
import { useState } from "react";
import { Route, withRouter } from "react-router-dom";
import AboutPage from "../../features/about/AboutPage";
import Catalog from "../../features/catalog/Catalog";
import ContactPage from "../../features/contact/ContactPage"
import ProductDetails from "../../features/catalog/ProductDetails";
import HomePage from "../../features/home/HomePage";
import Header from "./Header";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const paletteType = darkMode ? 'dark' : 'light';
  
  const theme = createTheme({
    palette: {
      mode: paletteType,
      background: {
        default: paletteType === 'light' ? '#eaeaea' : '#121212'
      }
    }
  });

  const handleThemeChange = () => (setDarkMode(!darkMode))

  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}/>   
      <Container>
        <Route exact path='/' component={withRouter(HomePage)}/>
        <Route exact path='/catalog' component={withRouter(Catalog)}/>
        <Route exact path='/catalog/:id' component={ProductDetails}/>
        <Route exact path='/about' component={withRouter(AboutPage)}/>
        <Route exact path='/contact' component={withRouter(ContactPage)}/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
